import React from 'react';
import Head from 'next/head';
import { Config as ConfigRaw } from 'utils/Config';
import { client } from 'utils/Sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

type IMetaProps = {
  title: string;
  description: string;
  href: string;
  config?: {
    site_title?: string;
    site_description?: string;
    site_url?: string;
    site_locale?: string;
    site_icon?: string;
  };
  post?: {
    image: string;
    date: string;
    modified_date: string;
  };
};

const Meta = (props: IMetaProps) => {
  const Config = {
    ...ConfigRaw,
    ...(props.config || {}),
    title: props.title,
    href: props.href,
    description: props.description,
  };

  const imgUrl = builder.image(props.config.site_icon).url();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href={imgUrl} key="favicon" />
        <title>{`${props.title || Config.site_title} | ${Config.site_name}`}</title>
        <meta
          name="description"
          content={props.description || Config.site_description}
          key="description"
        />
        <meta name="author" content={Config.author} key="author" />
        {Config.site_url && <link rel="canonical" href={Config.site_url} key="canonical" />}
        <meta
          property="og:title"
          content={`${props.title || Config.site_title} | ${Config.site_name}`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={props.description || Config.description}
          key="og:description"
        />
        <meta property="og:locale" content={Config.site_locale} key="og:locale" />
        <meta property="og:site_name" content={Config.site_name} key="og:site_name" />
        {props.post && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta
              property="og:image"
              content={`${Config.site_url}/${props.post.image}`}
              key="og:image"
            />
            <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
            <meta
              property="article:published_time"
              content={new Date(props.post.date).toISOString()}
              key="article:published_time"
            />
            <meta
              property="article:modified_time"
              content={new Date(props.post.modified_date).toISOString()}
              key="article:modified_time"
            />
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${props.description ? props.description : Config.description}",
            "author": {
              "@type": "Person",
              "name": "${Config.author}"
            },
            "@type": "BlogPosting",
            "url": "${Config.site_url}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${Config.site_url}/assets/images/logo.png"
              },
              "name": "${Config.author}"
            },
            "headline": "${props.title} | ${Config.site_name}",
            "image": ["${Config.site_url}/${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            "dateModified": "${new Date(props.post.modified_date).toISOString()}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${Config.site_url}"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key="ldjson"
            />
          </>
        )}
      </Head>
    </>
  );
};

export { Meta };
