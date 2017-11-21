import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
//
reset({ insertRule })

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>11 • Hamilton • St. George's | {title}</title>
      <meta name="description" content="Bermuda bus schedule: 11 • Hamilton • St. George's" />
    </Head>
    <busschedule
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        11 &bull; Hamilton &bull; St. George&rsquo;s
        <p className={css(tachyons('f5 f4-ns'))}>
          via Blackwatch Pass, Aquarium and Perfume Factory
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
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>6:45 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>8:00xp</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:00</td>
              <td className={css(tachyons('pv2 ph3'))}>8:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:00</td>
              <td className={css(tachyons('pv2 ph3'))}>9:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:30</td>
              <td className={css(tachyons('pv2 ph3'))}>9:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3" colspan="2'))}>
                Then every 15 min. in conjunction with{' '}
                <a href="../10-st-georges/" className={css(tachyons('link dim'))}>
                  Route 10
                </a>{' '}
                until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:00</td>
              <td className={css(tachyons('pv2 ph3'))}>12:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:30</td>
              <td className={css(tachyons('pv2 ph3'))}>12:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:00</td>
              <td className={css(tachyons('pv2 ph3'))}>1:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:30</td>
              <td className={css(tachyons('pv2 ph3'))}>1:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:00</td>
              <td className={css(tachyons('pv2 ph3'))}>2:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:30</td>
              <td className={css(tachyons('pv2 ph3'))}>2:30br</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:45br</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:25</td>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:35</td>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
              <td className={css(tachyons('pv2 ph3'))}>5:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:55</td>
              <td className={css(tachyons('pv2 ph3'))}>5:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:05</td>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:10xp</td>
              <td className={css(tachyons('pv2 ph3'))}>6:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:25sd</td>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:35</td>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45</td>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:45 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
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
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>6:45 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:30</td>
              <td className={css(tachyons('pv2 ph3'))}>8:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:00</td>
              <td className={css(tachyons('pv2 ph3'))}>9:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:30</td>
              <td className={css(tachyons('pv2 ph3'))}>9:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3" colspan="2'))}>
                Then every 15 min. in conjunction with{' '}
                <a href="../10-st-georges/" className={css(tachyons('link dim'))}>
                  Route 10
                </a>{' '}
                until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:00</td>
              <td className={css(tachyons('pv2 ph3'))}>12:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:30</td>
              <td className={css(tachyons('pv2 ph3'))}>12:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:00</td>
              <td className={css(tachyons('pv2 ph3'))}>1:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:30</td>
              <td className={css(tachyons('pv2 ph3'))}>1:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:00</td>
              <td className={css(tachyons('pv2 ph3'))}>2:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:30</td>
              <td className={css(tachyons('pv2 ph3'))}>2:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
              <td className={css(tachyons('pv2 ph3'))}>4:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:00</td>
              <td className={css(tachyons('pv2 ph3'))}>5:00</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:10</td>
              <td className={css(tachyons('pv2 ph3'))}>5:30</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:30</td>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:45</td>
              <td className={css(tachyons('pv2 ph3'))}>6:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:45</td>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45</td>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:45 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
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
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave St. George&rsquo;s</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:45 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>7:45 AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
              <td className={css(tachyons('pv2 ph3'))}>8:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
              <td className={css(tachyons('pv2 ph3'))}>10:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
              <td className={css(tachyons('pv2 ph3'))}>11:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
              <td className={css(tachyons('pv2 ph3'))}>12:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
              <td className={css(tachyons('pv2 ph3'))}>1:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
              <td className={css(tachyons('pv2 ph3'))}>2:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
              <td className={css(tachyons('pv2 ph3'))}>3:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
              <td className={css(tachyons('pv2 ph3'))}>9:45</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:45 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>10:45 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>sd</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates direct from Hamilton to St. David&rsquo;s; then continues to St.
            George&rsquo;s.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>xp</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates express between Shelly Bay Plaza and Hamilton.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>br</dt>
          <dd className={css(tachyons('dib ml0 gray'))}>
            Trip operates via Berkeley Road School route; does not serve Black Watch Pass or Tennis
            Stadium.
          </dd>
        </dl>
      </div>
    </busschedule>
    <averagetimes
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f2-ns lh-copy tc'))}>Average Running Times up to 7pm</h1>
      <p className={css(tachyons('normal'))}>
        After 7:00 PM the average running time between Hamilton and St. George&rsquo;s Terminal is
        5-8 minutes less.
      </p>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Hamilton to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Aquarium</td>
              <td className={css(tachyons('pv2 ph3'))}>20 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Perfume Factory</td>
              <td className={css(tachyons('pv2 ph3'))}>30 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Southside Gate 1</td>
              <td className={css(tachyons('pv2 ph3'))}>38 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>St George&rsquo;s</td>
              <td className={css(tachyons('pv2 ph3'))}>50 minutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>
            From St George&rsquo;s Terminal to
          </caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>St George&rsquo;s</td>
              <td className={css(tachyons('pv2 ph3'))}>4 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Southside Gate 1</td>
              <td className={css(tachyons('pv2 ph3'))}>12 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Perfume Factory</td>
              <td className={css(tachyons('pv2 ph3'))}>20 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Aquarium</td>
              <td className={css(tachyons('pv2 ph3'))}>30 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hamilton</td>
              <td className={css(tachyons('pv2 ph3'))}>50 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </averagetimes>
  </div>
))
