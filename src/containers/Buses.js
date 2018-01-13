import React from 'react'
import { getSiteProps, Head } from 'react-static'
import { Link } from 'react-router-dom'
import { wrap, reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
import glamorous from 'glamorous'
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

const Fares = glamorous.div(
  tachyons('bg-light-gray pv3 pv4-ns ph3 ph6-l flex flex-column flex-auto'),
)

const TableWidth45 = glamorous.div({
  width: '100%',
  '@media screen and (min-width: 60em)': {
    width: '45%',
  },
})
export default getSiteProps(({ title }) => (
  <div>
    <Head>
      <title>{`Bermuda Bus Schedules | ${title}`}</title>
      <meta name="description" content="Bermuda bus schedules" />
    </Head>
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
          </svg>{' '}
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

      <table className={css(tachyons('collapse black ba br2 b--black-10 pv2 ph3 tc'))}>
        <caption className={css(tachyons('f4 pv2 b lh-copy'))}>
          Central Terminal Information Booth
        </caption>
        <thead>
          <tr>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Monday to Friday</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Saturday</th>
            <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Sun &amp; Holidays</th>
          </tr>
        </thead>
        <tbody>
          <tr className={css(tachyons('striped--light-gray'))}>
            <td className={css(tachyons('pv2 ph3'))}>7:15am-7:00pm</td>
            <td className={css(tachyons('pv2 ph3'))}>8:00am-6:30pm</td>
            <td className={css(tachyons('pv2 ph3'))}>8:30am-5:30pm</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className={css(tachyons('pv3'))}>
              For information call{' '}
              <a className={css(tachyons('link dim'))} href="tel:+14412923851">
                (441) 292-3851
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
      <p>
        The Department of Public Transportation does not assume responsibility for lost property.
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
    </section>
    <section
      className={css(
        tachyons('bg-white pv3 pv4-ns ph3 ph6-l flex flex-column items-center flex-auto'),
      )}
    >
      <h1 className={css(tachyons('f3 lh-copy'))}>East</h1>
      <div className={css(tachyons('w-100'))}>
        <hr />
      </div>
      <h1 className={css(tachyons('f4 lh-copy'))}>Grotto bay</h1>
      <div className={css(tachyons('flex flex-column flex-row-ns'))}>
        <div>
          <Link
            to="/buses/1-grotto-bay"
            className={css(
              tachyons('lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-auto-l'),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>1</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Grotto Bay</span>
          </Link>
          <Link
            to="/buses/3-grotto-bay"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-auto-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>3</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Grotto Bay</span>
          </Link>
        </div>
      </div>
      <h1 className={css(tachyons('f4 lh-copy'))}>St. George&rsquo;s</h1>
      <div className={css(tachyons('flex flex-column flex-row-ns'))}>
        <div>
          <Link
            to="/buses/1-st-georges"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>1</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; St. George&rsquo;s</span>
          </Link>
          <Link
            to="/buses/3-st-georges"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>3</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; St. George&rsquo;s</span>
          </Link>
          <Link
            to="/buses/6-st-georges"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>6</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>St. George&rsquo;s &bull; St. David&rsquo;s</span>
          </Link>
          <Link
            to="/buses/10-st-georges"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>10</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; St. George&rsquo;s</span>
          </Link>
          <Link
            to="/buses/11-st-georges"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>11</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; St. George&rsquo;s</span>
          </Link>
        </div>
      </div>
      <h1 className={css(tachyons('f3 lh-copy'))}>Central</h1>
      <div className={css(tachyons('w-100'))}>
        <hr />
      </div>
      <h1 className={css(tachyons('f4 lh-copy'))}>Spanish Point / Pond Hill / Prospect</h1>
      <div className={css(tachyons('flex flex-column flex-row-ns'))}>
        <div>
          <Link
            to="/buses/4-spanish-point"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-auto-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>4</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Spanish Point</span>
          </Link>
          <Link
            to="/buses/5-pond-hill"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-auto-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>5</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Pond Hill</span>
          </Link>
          <Link
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-auto-l',
              ),
            )}
            to="/buses/9-prospect"
          >
            <span className={css(tachyons('f3 f4-ns'))}>9</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Prospect</span>
          </Link>
        </div>
      </div>
      <h1 className={css(tachyons('f3 lh-copy'))}>West</h1>
      <div className={css(tachyons('w-100'))}>
        <hr />
      </div>
      <h1 className={css(tachyons('f4 lh-copy'))}>Ord Road</h1>
      <div className={css(tachyons('flex flex-column flex-row-ns'))}>
        <div>
          <Link
            to="/buses/2-ord-road"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-auto-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>2</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Ord Road</span>
          </Link>
        </div>
      </div>
      <h1 className={css(tachyons('f4 lh-copy'))}>Barnes Corner / Somerset / Dockyard</h1>
      <div className={css(tachyons('flex flex-column flex-row-ns'))}>
        <div>
          <Link
            to="/buses/7-barnes-corner"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>7</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Barnes Corner</span>
            <div className={css(tachyons('f6'))}>via South Shore Beaches 🏖</div>
          </Link>
          <Link
            to="/buses/7-dockyard"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>7</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Dockyard</span>
            <div className={css(tachyons('f6'))}>via South Shore Beaches 🏖</div>
          </Link>
          <Link
            to="/buses/8-dockyard"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>8</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Dockyard</span>
            <div className={css(tachyons('f6'))}>via Middle Road</div>
          </Link>
          <Link
            to="/buses/8-somerset"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>8</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Somerset</span>
            <div className={css(tachyons('f6'))}>via Middle Road</div>
          </Link>
          <Link
            to="/buses/8-cedar-hill"
            className={css(
              tachyons(
                'f3 f4-ns lh-copy link dim ph3 pv2 mb2 dib white mr1 bg-blue tc w-100 w-30-l',
              ),
            )}
          >
            <span className={css(tachyons('f3 f4-ns'))}>8</span>
            <span className={css(tachyons('dn di-ns'))}>&nbsp;&bull;&nbsp;</span>
            <span className={css(tachyons('di dn-ns'))}>
              <br />
            </span>
            <span className={css(tachyons('f4'))}>Hamilton &bull; Cedar Hill</span>
            <div className={css(tachyons('f6'))}>via Middle Road</div>
          </Link>
        </div>
      </div>
    </section>
    <Fares id="fares">
      <h1 className={css(tachyons('f2 lh-title'))}>Fare Information</h1>
      <div className={css(tachyons('lh-copy'))}>
        <p>Please ensure you have the correct fare before boarding.</p>
        <p>
          Passes, Tokens, and Tickets are available from the Hamilton Ferry &amp; Bus Terminals,
          Visitors Information Centres, sub-post offices, hotels, and guest houses.
        </p>
        <p>
          Passes, Tokens, and Tickets are valid on all routes for both&nbsp;
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
          </svg>{' '}
          ferries and{' '}
          <svg
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
          </svg>{' '}
          buses. Tickets and Tokens for 3 zone work on the{' '}
          <span className={css(tachyons('white bg-pink'))}>Pink</span> route.
        </p>
      </div>
      <h1 className={css(tachyons('f3 lh-copy'))}>Free</h1>
      <ul>
        <li>Holders of Special Persons Pass (including Seniors)</li>
        <li>Children under age 5</li>
      </ul>
      <div className={css(tachyons('flex flex-column flex-row-l justify-between'))}>
        <TableWidth45>
          <h1 className={css(tachyons('f3 lh-copy'))}>Passes</h1>
          <table
            className={css(tachyons('collapse w-100 bg-white black ba br2 b--black-10 pv2 ph3 tc'))}
          >
            <thead>
              <tr>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))} />
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Adult (16+)</th>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Child (5-15)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>1-Day</td>
                <td className={css(tachyons('pv2 ph3'))}>$19.00</td>
                <td className={css(tachyons('pv2 ph3'))}>$9.50</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>2-Day</td>
                <td className={css(tachyons('pv2 ph3'))}>$31.50</td>
                <td className={css(tachyons('pv2 ph3'))}>$16.00</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>3-Day</td>
                <td className={css(tachyons('pv2 ph3'))}>$44.00</td>
                <td className={css(tachyons('pv2 ph3'))}>$22.00</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>4-Day</td>
                <td className={css(tachyons('pv2 ph3'))}>$48.50</td>
                <td className={css(tachyons('pv2 ph3'))}>$24.50</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>7-Day</td>
                <td className={css(tachyons('pv2 ph3'))}>$62.00</td>
                <td className={css(tachyons('pv2 ph3'))}>$31.00</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>Monthly Pass</td>
                <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                  $69.00
                </td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>3-Month Pass</td>
                <td colSpan="2" className={css(tachyons('pv2 ph3'))}>
                  $169.00
                </td>
              </tr>
            </tbody>
          </table>
          <p className={css(tachyons('lh-copy'))}>
            <strong>Student Passes</strong> (Residents Only) &bull; All Students must present a
            Student Pass for free transportation. If Student Pass not presented, child (Age 5 - 15)
            or Adult (Age 16+) fares apply.
          </p>
        </TableWidth45>
        <TableWidth45>
          <h1 className={css(tachyons('f3 lh-copy'))}>Tickets/Tokens</h1>
          <table
            className={css(tachyons('collapse w-100 bg-white black ba br2 b--black-10 pv2 ph3 tc'))}
          >
            <thead>
              <tr>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))} />
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Adult&nbsp;(16+)</th>
                <th className={css(tachyons('f5 lh-copy fw6 pv2 ph3'))}>Child&nbsp;(5-15)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>Cash</td>
                <td className={css(tachyons('pv2 ph3'))}>
                  $3.50 (3 zone)<br />
                  $5.00 (14 zone)
                </td>
                <td className={css(tachyons('pv2 ph3'))}>$2.75 (All zones)</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>Tokens</td>
                <td className={css(tachyons('pv2 ph3'))}>
                  $2.75 (3 zone)<br />
                  $4.50 (14 zone)
                </td>
                <td className={css(tachyons('pv2 ph3'))}>-</td>
              </tr>
              <tr className={css(tachyons('striped--near-white'))}>
                <td className={css(tachyons('pv2 ph3'))}>Booklet of 15 Tickets</td>
                <td className={css(tachyons('pv2 ph3'))}>
                  $25.00 (3 zone)<br />
                  $37.50 (14 zone)
                </td>
                <td className={css(tachyons('pv2 ph3'))}>$9.50</td>
              </tr>
            </tbody>
          </table>
        </TableWidth45>
      </div>
    </Fares>
  </div>
))
