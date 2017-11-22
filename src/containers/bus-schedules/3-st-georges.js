import React from 'react'
import { getSiteProps, Head, Link } from 'react-static'
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
      <title>{`3 • Hamilton • St. George's | ${title}`}</title>
      <meta name="description" content="Bermuda bus schedule: 3 • Hamilton • St. George's" />
    </Head>
    <BusSchedule>
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        3 &bull; Hamilton &bull; St. George&rsquo;s
        <p className={css(tachyons('f5 f4-ns'))}>
          via Middle Road, Devil&rsquo;s Hole, The Caves and Grotto Bay
        </p>
      </h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Monday to Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:12 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>10:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:12</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:12 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-33-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Saturdays</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>
                For more Saturday service see timetable for route {' '}
                <Link to="/buses/3-grotto-bay" className={css(tachyons('link dim'))}>
                  3&nbsp;&bull;&nbsp;Hamilton&nbsp;&bull;&nbsp;Grotto&nbsp;Bay
                </Link>.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>
                Connections are available at Grotto Bay to/from St. George&rsquo;s
              </td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Sunday &amp; Holidays</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:30 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>11:30 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:30</td>
              <td className={css(tachyons('pv2 ph3'))}>12:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:30</td>
              <td className={css(tachyons('pv2 ph3'))}>1:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:30</td>
              <td className={css(tachyons('pv2 ph3'))}>2:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:30 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>5:30 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>fl</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>Trip operates only as far as Flatts.</dd>
        </dl>
      </div>
    </BusSchedule>
    <AverageTimes>
      <h1 className={css(tachyons('f3 f2-ns lh-copy tc'))}>Average Running Times</h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Hamilton to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Zuill&rsquo;s Park</td>
              <td className={css(tachyons('pv2 ph3'))}>15 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Devil&rsquo;s Hole</td>
              <td className={css(tachyons('pv2 ph3'))}>22 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Grotto Bay</td>
              <td className={css(tachyons('pv2 ph3'))}>40 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>St. George&rsquo;s</td>
              <td className={css(tachyons('pv2 ph3'))}>58 minutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From St. George&rsquo;s to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Grotto Bay</td>
              <td className={css(tachyons('pv2 ph3'))}>18 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Devil&rsquo;s Hole</td>
              <td className={css(tachyons('pv2 ph3'))}>36 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Zuill&rsquo;s Park</td>
              <td className={css(tachyons('pv2 ph3'))}>43 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hamilton</td>
              <td className={css(tachyons('pv2 ph3'))}>58 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AverageTimes>
  </div>
))
