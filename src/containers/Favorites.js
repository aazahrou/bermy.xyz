import React from 'react'
import { getSiteProps, Head, Link } from 'react-static'
import { wrap, reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
// import glamorous from 'glamorous'
//
reset({ insertRule })

const styles = wrap(
  {
    section: 'bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto',
  },
  css,
)

export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>{`Bermuda Bus Schedules | ${title}`}</title>
      <meta name="description" content="Bermuda bus schedules" />
    </Head>
    <section className={styles.section}>
      <h1 className={css(tachyons('f3 f1-ns lh-copy tc'))}>Tourist Favorites</h1>
      <p>
        Poles that are pink indicate service inbound to the City of Hamilton. Poles that are blue
        indicate service outbound from the City of Hamilton.
      </p>
      <table
        className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc w-100 w-auto-l'))}
      >
        <thead>
          <tr>
            <th />
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Destination</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Route</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Fare</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                ⛳️
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Belmont Hills Golf Club</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/8-dockyard" className={css(tachyons('link dim'))}>
                8
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                🐠
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Bermuda Aquarium, Museum & Zoo</td>
            <td className={css(tachyons('pv2 ph3'))}>10, 11</td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                🖼
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>National Museum of Bermuda</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>,{' '}
              <Link to="/buses/8-dockyard" className={css(tachyons('link dim'))}>
                8
              </Link>{' '}
              or Blue ferry
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                🐡
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>
              Bermuda Underwater Exploration Institute
            </td>
            <td className={css(tachyons('pv2 ph3'))}>
              1, 3,{' '}
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>,{' '}
              <Link to="/buses/8-dockyard" className={css(tachyons('link dim'))}>
                8
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Gardens">
                🌺
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Botanical Gardens</td>
            <td className={css(tachyons('pv2 ph3'))}>
              1,{' '}
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Crystal">
                🔮
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Crystal Caves of Bermuda</td>
            <td className={css(tachyons('pv2 ph3'))}>1, 3, 10, 11</td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Beach">
                🏖
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Elbow Beach</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hotel">
                🏨
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Fairmont Southampton</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>,{' '}
              <Link to="/buses/8-dockyard" className={css(tachyons('link dim'))}>
                8
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Light">
                💡
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Gibbs Hill Lighthouse</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hotel">
                🏨
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Grotto Bay Beach Resort</td>
            <td className={css(tachyons('pv2 ph3'))}>1, 3, 10, 11</td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Beach">
                🏖
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Horseshoe Bay</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hospital">
                🏥
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Hospital</td>
            <td className={css(tachyons('pv2 ph3'))}>
              1,{' '}
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Beach">
                🏖
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>John Smith’s Bay</td>
            <td className={css(tachyons('pv2 ph3'))}>1</td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Airport">
                ✈️
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>L.F. Wade International Airport</td>
            <td className={css(tachyons('pv2 ph3'))}>1, 3, 10, 11</td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Palm">
                🌴
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Mangrove Bay (Somerset)</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>,{' '}
              <Link to="/buses/8-dockyard" className={css(tachyons('link dim'))}>
                8
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Cruise ship">
                🛳
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Royal Naval Dockyard</td>
            <td className={css(tachyons('pv2 ph3'))}>
              <Link to="/buses/7-dockyard" className={css(tachyons('link dim'))}>
                7
              </Link>,{' '}
              <Link to="/buses/8-dockyard" className={css(tachyons('link dim'))}>
                8
              </Link>{' '}
              or Blue Ferry
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Town">
                🏡
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>St. George’s</td>
            <td className={css(tachyons('pv2 ph3'))}>1, 3, 10, 11</td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hotel">
                🏨
              </span>{' '}
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Tucker’s Point Resort</td>
            <td className={css(tachyons('pv2 ph3'))}>1, 3</td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
))
