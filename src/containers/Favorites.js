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
    route_link: 'pa1 mb2 bg-blue white link dim',
    route_cell: 'pv2 ph3 flex flex-auto flex-column',
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
        The table below lists many of the destinations that visitors ask about most frequently.
        Alongside each destination is the number of the route(s) or ferry serving that destination
        and the appropriate Fare Zone.
      </p>
      <dl className={css(tachyons('f5 lh-title mv2'))}>
        <dt className={css(tachyons('dib pa1 white bg-pink'))}>Pink poles</dt>
        <dd className={css(tachyons('dib ml1'))}>
          indicate service <strong>inbound</strong> to the City of Hamilton
        </dd>
      </dl>
      <dl className={css(tachyons('f5 lh-title mv2'))}>
        <dt className={css(tachyons('dib pa1 white bg-blue'))}>Blue poles</dt>
        <dd className={css(tachyons('dib ml1'))}>
          indicate service <strong>outbound</strong> from the City of Hamilton
        </dd>
      </dl>
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
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Belmont Hills Golf Club</td>
            <td className={styles.route_cell}>
              <Link to="/buses/8-dockyard" className={styles.route_link}>
                8 Dockyard
              </Link>{' '}
              <Link to="/buses/8-somerset" className={styles.route_link}>
                8 Somerset
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                🐠
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Bermuda Aquarium, Museum & Zoo</td>
            <td className={styles.route_cell}>
              <Link to="/buses/10-st-georges" className={styles.route_link}>
                10 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/11-st-georges" className={styles.route_link}>
                11 St. George&rsquo;s
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                🖼
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>National Museum of Bermuda</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/8-dockyard" className={styles.route_link}>
                8 Dockyard
              </Link>{' '}
              <Link to="/ferries#blueroute" className={styles.route_link}>
                Blue Ferry
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="">
                🐡
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>
              Bermuda Underwater Exploration Institute
            </td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/3-grotto-bay" className={styles.route_link}>
                3 Grotto Bay
              </Link>{' '}
              <Link to="/buses/3-st-georges" className={styles.route_link}>
                3 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>{' '}
              <Link to="/buses/8-dockyard" className={styles.route_link}>
                8 Dockyard
              </Link>{' '}
              <Link to="/buses/8-somerset" className={styles.route_link}>
                8 Somerset
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Gardens">
                🌺
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Botanical Gardens</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Crystal">
                🔮
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Crystal Caves of Bermuda</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/3-grotto-bay" className={styles.route_link}>
                3 Grotto Bay
              </Link>{' '}
              <Link to="/buses/3-st-georges" className={styles.route_link}>
                3 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/10-st-georges" className={styles.route_link}>
                10 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/11-st-georges" className={styles.route_link}>
                11 St. George&rsquo;s
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Beach">
                🏖
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Elbow Beach</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hotel">
                🏨
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Fairmont Southampton</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>{' '}
              <Link to="/buses/8-dockyard" className={styles.route_link}>
                8 Dockyard
              </Link>{' '}
              <Link to="/buses/8-somerset" className={styles.route_link}>
                8 Somerset
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Light">
                💡
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Gibbs Hill Lighthouse</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hotel">
                🏨
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Grotto Bay Beach Resort</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/3-grotto-bay" className={styles.route_link}>
                3 Grotto Bay
              </Link>{' '}
              <Link to="/buses/3-st-georges" className={styles.route_link}>
                3 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/10-st-georges" className={styles.route_link}>
                10 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/11-st-georges" className={styles.route_link}>
                11 St. George&rsquo;s
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Beach">
                🏖
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Horseshoe Bay</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hospital">
                🏥
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Hospital</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/7-barnes-corner" className={styles.route_link}>
                7 Barnes Corner
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Beach">
                🏖
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>John Smith’s Bay</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
            </td>
            <td className={css(tachyons('pv2 ph3'))}>3 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Airport">
                ✈️
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>L.F. Wade International Airport</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/3-st-georges" className={styles.route_link}>
                3 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/10-st-georges" className={styles.route_link}>
                10 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/11-st-georges" className={styles.route_link}>
                11 St. George&rsquo;s
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Palm">
                🌴
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Mangrove Bay (Somerset)</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/8-dockyard" className={styles.route_link}>
                8 Dockyard
              </Link>{' '}
              <Link to="/buses/8-somerset" className={styles.route_link}>
                8 Somerset
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Cruise ship">
                🛳
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Royal Naval Dockyard</td>
            <td className={styles.route_cell}>
              <Link to="/buses/7-dockyard" className={styles.route_link}>
                7 Dockyard
              </Link>{' '}
              <Link to="/buses/8-dockyard" className={styles.route_link}>
                8 Dockyard
              </Link>{' '}
              <Link to="/ferries#blueroute" className={styles.route_link}>
                Blue Ferry
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Town">
                🏡
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>St. George&rsquo;s</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/3-st-georges" className={styles.route_link}>
                3 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/10-st-georges" className={styles.route_link}>
                10 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/11-st-georges" className={styles.route_link}>
                11 St. George&rsquo;s
              </Link>
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>
              <span role="img" aria-label="Hotel">
                🏨
              </span>
            </td>
            <td className={css(tachyons('tl pv2 ph3'))}>Tucker’s Point Resort</td>
            <td className={styles.route_cell}>
              <Link to="/buses/1-grotto-bay" className={styles.route_link}>
                1 Grotto Bay
              </Link>{' '}
              <Link to="/buses/1-st-georges" className={styles.route_link}>
                1 St. George&rsquo;s
              </Link>{' '}
              <Link to="/buses/3-grotto-bay" className={styles.route_link}>
                3 Grotto Bay
              </Link>{' '}
              <Link to="/buses/3-st-georges" className={styles.route_link}>
                3 St. George&rsquo;s
              </Link>{' '}
            </td>
            <td className={css(tachyons('pv2 ph3'))}>14 Zone</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
))
