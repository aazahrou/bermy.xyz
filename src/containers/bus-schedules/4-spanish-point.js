import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
//
reset({ insertRule })

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>4 • Hamilton • Spanish Point | {title}</title>
      <meta name="description" content="Bermuda bus schedule: 4 • Hamilton • Spanish Point" />
    </Head>
    <busschedule
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        4 &bull; Hamilton &bull; Spanish Point
        <p className={css(tachyons('f5 f4-ns'))}>via St. John&rsquo;s Road or North Shore Road</p>
      </h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Monday to Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Grotto Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>6:42 sj AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:12 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:27 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:30 sj AM</td>
              <td className={css(tachyons('pv2 ph3'))}>7:42 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:50 ns</td>
              <td className={css(tachyons('pv2 ph3'))}>8:02 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:10sj bk</td>
              <td className={css(tachyons('pv2 ph3'))}>8:22 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:30 sj bk</td>
              <td className={css(tachyons('pv2 ph3'))}>8:42 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>9:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>10:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>11:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>12:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>1:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>2:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>3:12ns bi</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>4:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30 ns</td>
              <td className={css(tachyons('pv2 ph3'))}>4:42 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>5:02 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:05 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>5:17 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:15 ns</td>
              <td className={css(tachyons('pv2 ph3'))}>5:27 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:30 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>5:42 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:00 sj PM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:12 ns PM</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Saturday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Grotto Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:27 ns AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:00 sj AM</td>
              <td className={css(tachyons('pv2 ph3'))}>8:12 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:30 ns</td>
              <td className={css(tachyons('pv2 ph3'))}>8:42 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>9:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>10:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>11:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>12:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>1:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>2:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>3:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>4:12 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>4:49 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:05 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>5:17 sj</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:00 sj PM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:00 ns PM</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Sunday &amp; Holidays</caption>
          <thead>
            <tr className={css(tachyons(''))}>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Grotto Bay</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45 sj AM</td>
              <td className={css(tachyons('pv2 ph3'))}>8:57 ns AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:15 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>10:27 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>12:57 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>2:57 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45 sj</td>
              <td className={css(tachyons('pv2 ph3'))}>4:57 ns</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:15 sj PM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:27 ns PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>ns</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>Trip operates via North Shore Road.</dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>sj</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates via St. John&rsquo;s Road.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>bk</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates via Berkeley Road school route; does not serve St. John&rsquo;s Road
            between Berkeley Road and Admiralty House junction.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>bi</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates via Berkeley Road school route; does not serve Langton Hill.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>Outbound</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Buses travelling via North Shore Road will travel via Black Watch Pass.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>Inbound</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Buses travelling via North Shore Road will travel via Langton Hill. Collectors Hill.
          </dd>
        </dl>
      </div>
    </busschedule>
    <averagetimes
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f2-ns lh-copy tc'))}>Average Running Times</h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Hamilton to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Spanish Point</td>
              <td className={css(tachyons('pv2 ph3'))}>12 minutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Spanish Point to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hamilton</td>
              <td className={css(tachyons('pv2 ph3'))}>12 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </averagetimes>
  </div>
))
