import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
import glamorous from 'glamorous'
//
reset({ insertRule })

const BusSchedule = glamorous.div(
  tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
)

const AverageTimes = glamorous.div(
  tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
)

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>{`6 • St. George's • St. David's | ${title}`}</title>
      <meta name="description" content="Bermuda bus schedule: 6 • St. George's • St. David's" />
    </Head>
    <BusSchedule
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        6 &bull; St. George&rsquo;s &bull; St. David&rsquo;s
        <p className={css(tachyons('f5 f4-ns'))}>via Clearwater Beach</p>
      </h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Monday to Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. David&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:40 hm AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:55 sd</td>
              <td className={css(tachyons('pv2 ph3'))}>7:20 ht</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15</td>
              <td className={css(tachyons('pv2 ph3'))}>7:40 hm</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>8:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>10:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>11:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3'))}>11:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>12:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3'))}>12:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>1:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>1:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>2:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>3:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>4:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>5:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>6:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:40 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>7:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>8:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45(ss) PM</td>
              <td className={css(tachyons('pv2 ph3'))}>9:10(mr) PM</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Saturday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. David&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15</td>
              <td className={css(tachyons('pv2 ph3'))}>7:40 hm</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>8:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>10:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>11:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3'))}>11:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>12:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3'))}>12:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>1:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>1:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>2:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>3:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>4:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>5:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>6:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:40 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>7:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45(ss)</td>
              <td className={css(tachyons('pv2 ph3'))}>8:10(mr)</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45(ss) PM</td>
              <td className={css(tachyons('pv2 ph3'))}>9:10(mr) PM</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Sunday &amp; Holidays</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. David&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>8:40 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15</td>
              <td className={css(tachyons('pv2 ph3'))}>9:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15</td>
              <td className={css(tachyons('pv2 ph3'))}>10:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:15</td>
              <td className={css(tachyons('pv2 ph3'))}>11:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:15</td>
              <td className={css(tachyons('pv2 ph3'))}>12:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:15</td>
              <td className={css(tachyons('pv2 ph3'))}>1:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:15</td>
              <td className={css(tachyons('pv2 ph3'))}>2:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:15</td>
              <td className={css(tachyons('pv2 ph3'))}>3:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:15</td>
              <td className={css(tachyons('pv2 ph3'))}>4:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15</td>
              <td className={css(tachyons('pv2 ph3'))}>5:40</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:40 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>HM</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>
            This trip operates to Hamilton via Route 3.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>HT</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>
            On school days, trip operates to Warwick via Collector's Hill. On other days, trip
            operates to Hamilton via Route 11.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>SD</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>This trip operates on school days only.</dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>MR</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>Main Road (St. David's Road).</dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>SS</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>
            All trips enter St. David&rsquo;s via Southside Road and exit via St. David&rsquo;s Main
            Road, and provide service to Clear Water Beach.
          </dd>
        </dl>
      </div>
    </BusSchedule>
    <AverageTimes
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f2-ns lh-copy tc'))}>Average Running Times</h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From St. George&rsquo;s to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Southside Gate 1</td>
              <td className={css(tachyons('pv2 ph3'))}>11 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>St. David&rsquo;s</td>
              <td className={css(tachyons('pv2 ph3'))}>25 minutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From St. David&rsquo;s to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Southside Gate 1</td>
              <td className={css(tachyons('pv2 ph3'))}>13 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>St. George&rsquo;s</td>
              <td className={css(tachyons('pv2 ph3'))}>25 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AverageTimes>
  </div>
))
