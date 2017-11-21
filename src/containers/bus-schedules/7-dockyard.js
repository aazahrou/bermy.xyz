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
      <title>7 • Hamilton • Dockyard | {title}</title>
      <meta name="description" content="Bermuda bus schedule: 7 • Hamilton • Dockyard" />
    </Head>
    <BusSchedule
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>
        7 &bull; Hamilton &bull; Dockyard
        <p className={css(tachyons('f5 f4-ns'))}>via South Shore Beaches 🏖</p>
      </h1>
      <div className={css(tachyons('flex flex-column flex-row-l justify-around w-100'))}>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>Monday to Friday</caption>
          <thead>
            <tr>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Hamilton</th>
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>6:50mb AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:00mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:10mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:20mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:30mbsv</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:45mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:00mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:00 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>8:20we</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:00pr</td>
              <td className={css(tachyons('pv2 ph3'))}>9:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:30</td>
              <td className={css(tachyons('pv2 ph3'))}>9:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:00</td>
              <td className={css(tachyons('pv2 ph3'))}>10:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:30</td>
              <td className={css(tachyons('pv2 ph3'))}>10:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:00</td>
              <td className={css(tachyons('pv2 ph3'))}>11:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                Then every 30 mins. until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3'))}>4:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3'))}>4:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3'))}>5:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:20mb</td>
              <td className={css(tachyons('pv2 ph3'))}>5:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3'))}>6:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:50mb</td>
              <td className={css(tachyons('pv2 ph3'))}>8:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:00</td>
              <td className={css(tachyons('pv2 ph3'))}>9:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:20mb</td>
              <td className={css(tachyons('pv2 ph3'))}>10:20 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:30</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:00mb</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:30mb</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15 PM</td>
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
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:00mb AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>7:30mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:00mb</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>8:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:00 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>9:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:30</td>
              <td className={css(tachyons('pv2 ph3'))}>9:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:00</td>
              <td className={css(tachyons('pv2 ph3'))}>10:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:30</td>
              <td className={css(tachyons('pv2 ph3'))}>10:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:00</td>
              <td className={css(tachyons('pv2 ph3'))}>11:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                Then every 30 mins. until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3'))}>4:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3'))}>4:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3'))}>5:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3'))}>8:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:00</td>
              <td className={css(tachyons('pv2 ph3'))}>9:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:30mb</td>
              <td className={css(tachyons('pv2 ph3'))}>10:20 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:00mb</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>7:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>8:15</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:15 PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
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
              <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Leave Dockyard</th>
            </tr>
          </thead>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
              <td className={css(tachyons('pv2 ph3'))}>10:00mb AM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>9:30 AM</td>
              <td className={css(tachyons('pv2 ph3'))}>10:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>10:00</td>
              <td className={css(tachyons('pv2 ph3'))}>11:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                Then every 30 mins. until
              </td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:00</td>
              <td className={css(tachyons('pv2 ph3'))}>4:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>3:30</td>
              <td className={css(tachyons('pv2 ph3'))}>4:50</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:00</td>
              <td className={css(tachyons('pv2 ph3'))}>5:20</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>4:30</td>
              <td className={css(tachyons('pv2 ph3'))}>5:50 PM</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>5:00mb</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>6:00mb PM</td>
              <td className={css(tachyons('pv2 ph3'))}>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={css(tachyons('pa3 pa4-ns'))}>
        <h4 className={css(tachyons('f4 fw6'))}>Notes</h4>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>mb</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>
            Trip operates to or from Somerset Terminal; does not serve Dockyard.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>pr</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>
            Operates via Port Royal School route; does not serve Turtle Cove area.
          </dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>sv</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>Trip operates via Sound View Road.</dd>
        </dl>
        <dl className={css(tachyons('f5 lh-title mv2'))}>
          <dt className={css(tachyons('dib b'))}>we</dt>
          <dd className={css(tachyons('dib ml1 gray'))}>
            Trip operates via West End School route; does not serve Somerset Main Road between
            Cricket Lane and Sound View Road.
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
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Hamilton to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Elbow Beach</td>
              <td className={css(tachyons('pv2 ph3'))}>14 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Sonesta Beach</td>
              <td className={css(tachyons('pv2 ph3'))}>29 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Somerset</td>
              <td className={css(tachyons('pv2 ph3'))}>53 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Dockyard</td>
              <td className={css(tachyons('pv2 ph3'))}>62 miutes</td>
            </tr>
          </tbody>
        </table>
        <table
          className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-40-l'))}
        >
          <caption className={css(tachyons('f4 f3-ns pv2'))}>From Dockyard to</caption>
          <tbody>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Somerset</td>
              <td className={css(tachyons('pv2 ph3'))}>9 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Sonesta Beach</td>
              <td className={css(tachyons('pv2 ph3'))}>33 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Elbow Beach</td>
              <td className={css(tachyons('pv2 ph3'))}>48 minutes</td>
            </tr>
            <tr className={css(tachyons('striped--light-gray'))}>
              <td className={css(tachyons('pv2 ph3'))}>Hamilton</td>
              <td className={css(tachyons('pv2 ph3'))}>62 minutes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AverageTimes>
  </div>
))
