import React from 'react'
import { getSiteProps } from 'react-static'
import { wrap, reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
//
reset({ insertRule })

const styles = wrap(
  {
    section: 'bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto',
    h1: 'f1 lh-title',
    link: 'link dim',
    table: 'collapse black ba br2 b--black-10 pv2 ph3 tc',
    th: 'f5 lh-copy fw6 pv2 ph3',
    td: 'pv2 ph3 nowrap',
    blue: 'bg-blue f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l',
    pink: 'bg-pink f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l',
    green: 'bg-green f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l',
    orange: 'bg-orange f5 f4-ns lh-copy link dim ph3 pv2 mb2 mr1-l dib white tc w-100 w-auto-l',
  },
  css,
)

export default getSiteProps(() => (
  <section className={styles.section}>
    <div className={css(tachyons('tc'))}>
      <h1 className={styles.h1}>
        <svg
          fill="#000"
          height="47"
          viewBox="0 0 24 24"
          width="47"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
        </svg>
        Summer Ferry Schedule
      </h1>
      <p>Effective from 24 April 2017 to 29 October 2017</p>
      <p>Service is subject to change</p>
      <p>
        Ferry scheduling information and alert notifications<br />
        <a className={styles.link} href="http://www.marineandports.bm/ferries_about.aspx">
          www.marineandports.bm/ferries_about.aspx
        </a>
      </p>
    </div>
    <div className={css(tachyons('w-100 overflow-scroll flex-ns flex-column-ns items-center-ns'))}>
      <table className={styles.table}>
        <caption className={css(tachyons('f4 pv2 b lh-copy'))}>
          Hamilton Ferry Terminal Hours
        </caption>
        <thead>
          <tr>
            <th className={styles.th}>Mon-Fri</th>
            <th className={styles.th}>Saturday</th>
            <th className={styles.th}>Sun &amp; Holidays</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={styles.td}>6:30am-8pm</td>
            <td className={styles.td}>7:30am-6pm</td>
            <td className={styles.td}>8:30am-6pm</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className={css(tachyons('pv3'))}>
              For information call&nbsp;
              <a className={styles.link} href="tel:+14412954506">
                (441) 295-4506
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <p>Marine and Ports shall not be liable for loss or damage to property.</p>
    <div className={css(tachyons('flex flex-column flex-row-l'))}>
      <a className={styles.blue} href="#blueroute">
        Blue Route<br />Hamilton &bull; Dockyard
      </a>
      <a className={styles.pink} href="#pinkroute">
        Pink Route<br />Hamilton &bull; Paget &bull; Warwick
      </a>
      <a className={styles.green} href="#greenroute">
        Green Route<br />Hamilton &bull; Southampton &bull; Sandys
      </a>
      <a className={styles.orange} href="#orangeroute">
        Orange Route<br />Dockyard &bull; St.&nbsp;George&rsquo;s
      </a>
    </div>
  </section>
))
