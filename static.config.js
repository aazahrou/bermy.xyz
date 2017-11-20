/* eslint-disable react/no-danger */
import React, { Component } from 'react'
import { renderStaticOptimized } from 'glamor/server'
import { tachyons, reset } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'

reset({ insertRule })

export default {
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/buses',
      component: 'src/containers/Buses',
    },
    {
      path: '/ferries',
      component: 'src/containers/Ferries',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: async (render, Comp, meta) => {
    const html = render(<Comp />)
    const { css } = renderStaticOptimized(() => html)
    meta.glamStyles = css
    return html
  },
  siteRoot: 'http://localhost:3000',
  Document: class CustomDocument extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="description" content="Bermuda bus and ferry schedules" />

            <meta property="og:image" content="/img/bermy.xyz.preview.png" />
            <meta
              property="og:description"
              content="Bermuda bus and ferry schedules 🇧🇲 🚌 ⛴ 🕑"
            />
            <meta property="og:site_name" content="Bermy.xyz" />
            <meta property="og:title" content="Bermy.xyz" />
            <meta property="og:image:height" content="255" />
            <meta property="og:image:width" content="486" />
            <meta property="og:url" content="https://bermy.xyz/" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@muloka" />
            <meta name="twitter:title" content="Bermy.xyz" />
            <meta
              name="twitter:description"
              content="Bermuda bus and ferry schedules 🇧🇲 🚌 ⛴ 🕑"
            />
            <meta name="twitter:image:src" content="/img/bermy.xyz.preview.png" />

            <title>Bermy.xyz | Bus and Ferry Schedules</title>

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5f3a96" />
            <style dangerouslySetInnerHTML={{ __html: renderMeta.glamStyles }} />
          </Head>
          <Body className={css(tachyons('ma0 sans-serif'))}>{children}</Body>
        </Html>
      )
    }
  },
}
