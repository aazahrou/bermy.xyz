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
          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
        </svg>
        Bus Schedules
      </h1>
      <p>Effective since April 2015</p>
      <p>
        Department of Public Transportation<br />
        <a className={styles.link} href="https://www.gov.bm/department/public-transportation">
          www.gov.bm/department/public-transportation
        </a>
      </p>
    </div>
  </section>
))
