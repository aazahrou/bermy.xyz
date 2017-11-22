import React from 'react'
import { Router, Link } from 'react-static'
import Routes from 'react-static-routes'
import { wrap, reset, tachyons } from 'glamor-tachyons'
import { css, insertRule } from 'glamor'
import g from 'glamorous'

import OnRouteChange from './containers/components/OnRouteChange'

reset({ insertRule })

const Header = g.header(tachyons('bg-purple pv3 pv4-ns ph3 ph6-l white flex flex-row w-100'))
const Footer = g.footer(tachyons('bg-white pv3 pv4-ns ph3 ph6-l purple flex flex-row items-center'))
const Title = g.div(tachyons('di dn-l w-60 f1 lh-title'))
const TitleLarge = g.div(tachyons('dn di-l w-40-l f1 lh-title'))
const Navigation = g.div(tachyons('w-40 w-60-l flex flex-row justify-end'))
const NavIcon = g.div(tachyons('flex-l flex-column-l items-center-l pl2 pl4-ns'))
const Main = g.div(tachyons('flex flex-column min-vh-100'))

const styles = wrap(
  {
    link: 'link dim',
    link_white: 'link dim white',
    link_white_large: 'link dim white dn di-l',
  },
  css,
)

export default () => (
  <Router>
    <OnRouteChange>
      <Main>
        <Header>
          <Title>
            <Link to="/" className={styles.link_white}>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="195"
                height="60"
                viewBox="0 0 636.07 195.85"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M93.09,92.07A14.09,14.09,0,0,0,91,84.23a12.76,12.76,0,0,0-5.31-4.69A39.1,39.1,0,0,0,78.52,77q-4-1-7.95-1.83a48,48,0,0,1-7.25-2.09A12,12,0,0,1,58,69.21,10.53,10.53,0,0,1,56,62.55q0-3.59,1.46-4.8t5.35-1.21q2.12,0,5.71.26t5.64.26a50.39,50.39,0,0,0,13-1.54,26.57,26.57,0,0,0,9.23-4.17,18.05,18.05,0,0,0,5.24-6,15.29,15.29,0,0,0,1.76-7.18,18.59,18.59,0,0,0-2.67-9.34,29.46,29.46,0,0,0-7.54-8.46,38.47,38.47,0,0,0-12.56-6.15,57.59,57.59,0,0,0-16.85-2.34,78,78,0,0,0-17.32,1.9,59.8,59.8,0,0,0-16,6.19A41.63,41.63,0,0,0,17.8,30.47a61.47,61.47,0,0,0-4.1,6.63,47.61,47.61,0,0,1-5.27,7.8q-2.49,2.86-5.2,2.86Q0,47.75,0,40.36A28.84,28.84,0,0,1,2.64,28.13,32.14,32.14,0,0,1,9.92,18.05a54.34,54.34,0,0,1,10.95-7.84A69,69,0,0,1,34.53,4.54,110.58,110.58,0,0,1,65.92,0,82.62,82.62,0,0,1,78.37.92,69.57,69.57,0,0,1,89.43,3.48a63.88,63.88,0,0,1,9.52,4,49.23,49.23,0,0,1,8,5.09,51,51,0,0,1,6.34,5.93,35.16,35.16,0,0,1,4.65,6.48,31.37,31.37,0,0,1,2.78,6.81,26.17,26.17,0,0,1,1,6.92,23.14,23.14,0,0,1-1.5,8.28,22.36,22.36,0,0,1-4.8,7.43,31.63,31.63,0,0,1-8.06,6,46.45,46.45,0,0,1-11.65,4.14,74.18,74.18,0,0,1-15.23,1.72q13.26,0,21.17,7.69t7.91,20.65a30.63,30.63,0,0,1-1,7.8,27.64,27.64,0,0,1-2.82,6.92,36.37,36.37,0,0,1-4.39,6,37.23,37.23,0,0,1-5.71,5.16,61.23,61.23,0,0,1-14.36,7.76q-4,1.5-8.09,2.64t-8.39,1.87q-4.25.73-8.42,1.1t-8.2.37A69.49,69.49,0,0,1,33,132.75a28.47,28.47,0,0,1-10.8-4.54q-4.1-3-4.1-7.14,0-96.31,27.61-96.31,5.35,0,8.94,6a58.68,58.68,0,0,0-7.87,15.05A99.13,99.13,0,0,0,42,65.15q-1.58,10.58-2.2,20.73t-.62,22.52a9.58,9.58,0,0,0,2.16,6.34A12,12,0,0,0,47,118.47a26.09,26.09,0,0,0,8.09,1.14,43.47,43.47,0,0,0,10.07-1.25,49.67,49.67,0,0,0,10.22-3.66A44.58,44.58,0,0,0,84.3,109a26,26,0,0,0,6.37-7.69A19.09,19.09,0,0,0,93.09,92.07Z"
                    />
                    <path
                      className="cls-1"
                      d="M167.56,114.62a51.58,51.58,0,0,1-23.8,11.21,36.46,36.46,0,0,1-6,.51,25.5,25.5,0,0,1-9.3-1.65,21.87,21.87,0,0,1-7.62-5,22.45,22.45,0,0,1-5.24-9.08,42.7,42.7,0,0,1-1.87-13.26,56.48,56.48,0,0,1,1.21-11.72,46.26,46.26,0,0,1,3.7-10.8,37.54,37.54,0,0,1,6-8.9,25.59,25.59,0,0,1,19-8.28q8.57,0,13.92,5T162.87,76A23.41,23.41,0,0,1,161,85a27.32,27.32,0,0,1-4.8,7.73,42,42,0,0,1-6.88,6.15,48.71,48.71,0,0,1-7.95,4.69,55.61,55.61,0,0,1-8.13,3,12,12,0,0,0,2.23,4.32,8.16,8.16,0,0,0,3.15,2.38,10.15,10.15,0,0,0,3.85.7,20.06,20.06,0,0,0,6.52-1.25,37.87,37.87,0,0,0,6.92-3.22q3.33-2,5.68-3.59t4.32-3.15a8.91,8.91,0,0,1,2.16-1.54,4.65,4.65,0,0,1,2-.51,2.71,2.71,0,0,1,2.23,1.06,4.42,4.42,0,0,1,.84,2.82,10.5,10.5,0,0,1-1.35,4.69A19,19,0,0,1,167.56,114.62Zm-17.72-36.4a8.12,8.12,0,0,0-1.39-4.91,4.61,4.61,0,0,0-4-1.9,8.59,8.59,0,0,0-6,2.38,15.72,15.72,0,0,0-4,6.15,44.17,44.17,0,0,0-2.16,7.84,45.52,45.52,0,0,0-.73,8.09,49.82,49.82,0,0,0,5.42-2.6,56.29,56.29,0,0,0,5.82-3.77,20.12,20.12,0,0,0,5.05-5.24A10.93,10.93,0,0,0,149.83,78.22Z"
                    />
                    <path
                      className="cls-1"
                      d="M174.47,127.88a8.91,8.91,0,0,1-4.8-1.21,7.07,7.07,0,0,1-2.86-3.52,21.36,21.36,0,0,1-1.28-4.76,39.91,39.91,0,0,1-.37-5.82,158.48,158.48,0,0,1,2.27-26.51,123.14,123.14,0,0,1,6.15-23.51,8.88,8.88,0,0,1,2.49-3.92q1.39-1.06,4.76-1.06,3.66,0,4.47,1.25t.81,5.42v6.52q0,2.64.15,7.62h.81q.37-.73,1.5-3.08t1.72-3.52q.59-1.17,1.83-3.37a27.83,27.83,0,0,1,2.2-3.41q1-1.21,2.49-2.86a13.26,13.26,0,0,1,3-2.49,17.7,17.7,0,0,1,3.41-1.46,13,13,0,0,1,4-.62,7.22,7.22,0,0,1,5.16,1.9,6.54,6.54,0,0,1,2,5,83.53,83.53,0,0,1-1.13,8.46,72.25,72.25,0,0,0-1.14,10.73q0,8,6.3,8a14.08,14.08,0,0,0,6.7-2.05A37.93,37.93,0,0,0,231.75,85a4.48,4.48,0,0,1,2.78-1q2.2,0,2.2,4.76a16.59,16.59,0,0,1-.7,4.39,29,29,0,0,1-1.35,4L234,98.66,232,100.12q-1.83,1.32-2.42,1.68l-2.27,1.43a17.39,17.39,0,0,1-2.71,1.46l-2.64,1a14.45,14.45,0,0,1-3.11.84,21.51,21.51,0,0,1-3.11.22,16.83,16.83,0,0,1-7.32-1.5,15.08,15.08,0,0,1-5-3.66,18.83,18.83,0,0,1-3.22-5.82,42.4,42.4,0,0,1-1.94-6.74Q197.62,86,197,81.45h-1.17L182.75,118q-.15.29-.59,1.61t-.62,1.76l-.66,1.57a7.76,7.76,0,0,1-.84,1.61l-1,1.28a4,4,0,0,1-1.25,1.14,9.9,9.9,0,0,1-1.5.62A5.74,5.74,0,0,1,174.47,127.88Z"
                    />
                    <path
                      className="cls-1"
                      d="M276.28,64q0,4-4,25.63l1.39,1.54q9-21.09,19.12-31.71a6.4,6.4,0,0,1,4.83-1.9,8.64,8.64,0,0,1,5.49,1.72,5.67,5.67,0,0,1,2.2,4.72q0,2.64-.84,11.1T302.76,92.4q-.84,8.83-.84,12.27,0,1.54,0,2.45a21.74,21.74,0,0,0,.26,2.34,8.16,8.16,0,0,0,.59,2.2,4,4,0,0,0,1.14,1.39,3,3,0,0,0,1.94.62q2.86,0,7-3.44a70.28,70.28,0,0,0,7.91-7.84,16,16,0,0,1,2.38-2.34,3,3,0,0,1,1.65-.73q2.34,0,2.34,8.2v2.09c0,.32,0,.61,0,.88s0,.53,0,.77v.59l-3.11,2.89q-2.23,2.09-3.41,3.08t-3.37,2.75a26.12,26.12,0,0,1-3.92,2.67q-1.72.92-4,1.94a20.62,20.62,0,0,1-4.76,1.46,29.26,29.26,0,0,1-5.16.44,18,18,0,0,1-4.17-.44,11.61,11.61,0,0,1-3.15-1.21,7.74,7.74,0,0,1-2.27-2,11.22,11.22,0,0,1-1.5-2.6,17.9,17.9,0,0,1-.92-3.19,26.49,26.49,0,0,1-.48-3.59q-.11-1.76-.11-4a116.66,116.66,0,0,1,4.39-32.74q-5.64,10.55-10.44,21.86t-8.46,22.89a7,7,0,0,1-1.72,2.86,6.55,6.55,0,0,1-2.75,1.57,14.1,14.1,0,0,1-4,.48,5.26,5.26,0,0,1-3.44-1.14,6.58,6.58,0,0,1-2.05-3.15,21.49,21.49,0,0,1-.92-4.14,40.49,40.49,0,0,1-.26-4.83q0-3.52.33-7.14t1-7.4q.66-3.77,1.25-6.74t1.5-7.29q.91-4.32,1.43-6.88a171.81,171.81,0,0,0-11.46,20q-4.94,10.18-10.44,23.8a7.89,7.89,0,0,1-2.75,3.74,8,8,0,0,1-4.58,1.17,7.4,7.4,0,0,1-5.64-2.16,10.16,10.16,0,0,1-2.64-5.16,40.31,40.31,0,0,1-.59-7.54,148.36,148.36,0,0,1,2.09-24.5,163.6,163.6,0,0,1,5.53-23.18,11.38,11.38,0,0,1,3.41-5.13,8.22,8.22,0,0,1,5.53-2.05,6.48,6.48,0,0,1,4.72,1.83,6.38,6.38,0,0,1,1.87,4.76v.88a1.41,1.41,0,0,1-.07.44q-1,4.39-3,12.93t-2.75,11.54l1.46,1.54q10.4-23.07,20.8-31.71a7,7,0,0,1,1.17-.84,9.86,9.86,0,0,1,1.25-.59,6.51,6.51,0,0,1,1.39-.37,9.85,9.85,0,0,1,1.46-.11,7.22,7.22,0,0,1,5,1.76A6,6,0,0,1,276.28,64Z"
                    />
                    <path
                      className="cls-1"
                      d="M335.68,104.15q0,9.67,5.71,9.67a6.79,6.79,0,0,0,2.23-.37,5.87,5.87,0,0,0,2-1.17q.92-.8,1.69-1.57a8.62,8.62,0,0,0,1.5-2.23q.73-1.46,1.25-2.38a15.89,15.89,0,0,0,1.1-2.75q.59-1.83.88-2.67t.81-2.78q.51-1.94.62-2.42t.55-2.31l5.13-21.53A12.85,12.85,0,0,1,364,64.27a13.9,13.9,0,0,1,8.79-3,6.68,6.68,0,0,1,3.85,1,3.48,3.48,0,0,1,1.5,3.08q0,5.79-2.78,18t-3.08,14.28q-.44,2.86-1.76,10t-2,11.79q16.19-13.48,24.76-21.46a2.72,2.72,0,0,1,1.76-.44q2.56,0,4.72,3a10.78,10.78,0,0,1,2.16,6.48,5.94,5.94,0,0,1-1.21,3.66,18.74,18.74,0,0,1-3.92,3.59q-5.57,4.17-17.47,12.38t-13.15,9.08q-1.17,6.59-2.23,11.54T361,158.9a88.13,88.13,0,0,1-4,11.46,71.19,71.19,0,0,1-5.38,9.89,37,37,0,0,1-7.07,8.28A32.09,32.09,0,0,1,324,195.85q-16.41,0-16.41-14.58a19.44,19.44,0,0,1,.26-3.11q.26-1.58.55-2.86a14.59,14.59,0,0,1,1.1-3q.81-1.69,1.21-2.67a17.23,17.23,0,0,1,1.57-2.75q1.17-1.76,1.57-2.42t1.83-2.53l1.68-2.2q.26-.33,1.87-2.23t1.61-2q2.42-2.93,5.05-5.71t6-5.79q3.4-3,5.46-4.72t6.56-5.31q4.5-3.59,6-4.83l2-9Q343.08,128,335.31,128A16.65,16.65,0,0,1,322,122.09q-5.05-5.93-5.05-14.79a89.08,89.08,0,0,1,2.38-21.5,92.86,92.86,0,0,1,7-18.86,12.49,12.49,0,0,1,4.47-4.8,11.79,11.79,0,0,1,6.52-1.94,7.11,7.11,0,0,1,4.47,1.35,4.65,4.65,0,0,1,1.76,3.92,13.27,13.27,0,0,1-.55,3.77,40,40,0,0,1-1.5,4.14,35.38,35.38,0,0,0-1.39,3.81Q335.68,93,335.68,104.15Zm-10.84,77.64a12.72,12.72,0,0,0,7.65-2.6,22.23,22.23,0,0,0,5.82-6.26,51.6,51.6,0,0,0,4.25-8.9,88,88,0,0,0,3-9.12q1-3.88,1.87-8.28a72.83,72.83,0,0,0-14.28,12.6A58.18,58.18,0,0,0,323,174.83a11.33,11.33,0,0,0-1.1,4.25Q321.91,181.79,324.84,181.79Z"
                    />
                    <path
                      className="cls-1"
                      d="M417.05,102q5.93,0,9.16,3t3.22,8.83q0,6.37-3.66,10.18t-10.11,3.81q-5.86,0-8.94-3T403.65,116q0-6.44,3.52-10.22T417.05,102Z"
                    />
                    <path
                      className="cls-1"
                      d="M468.25,110.67q-.88,1-2.93,3.7T461.55,119q-1.72,2-4,4.21a18,18,0,0,1-4.65,3.44,10.59,10.59,0,0,1-4.76,1.21,13.69,13.69,0,0,1-6.78-1.61,11.6,11.6,0,0,1-4.54-4.54,25.31,25.31,0,0,1-2.49-6.3,36.15,36.15,0,0,1-1-7.47l10.55-6.3q1.83,8.5,5,8.5a5.54,5.54,0,0,0,3.48-1.76,21.38,21.38,0,0,0,3.26-3.66q1.32-1.9,3.19-4.83t2.31-3.52a216,216,0,0,1-8.79-25,4.27,4.27,0,0,1-.15-.73q0-3.08,3.92-5.75a13.5,13.5,0,0,1,7.58-2.67,5.18,5.18,0,0,1,4,2.2,16.89,16.89,0,0,1,2.78,4.61q1,2.42,2.23,6.15t1.72,4.83A106.07,106.07,0,0,1,492.71,64.6a11.79,11.79,0,0,1,6.37-2.27,6,6,0,0,1,5.09,2.42,9.8,9.8,0,0,1,1.79,6q0,5.49-3.88,7.91a110.27,110.27,0,0,0-20.51,17.29q.22.37,1.25,2.56t1.68,3.44q.66,1.25,1.9,3.33a22.63,22.63,0,0,0,2.27,3.26,12.24,12.24,0,0,0,2.38,2.09,4.66,4.66,0,0,0,2.6.92q10.11,0,23.36-14.72Q519.59,94,521.28,94q2.34,0,2.34,5.35a28.49,28.49,0,0,1-.88,6.85q-.88,3.55-1.9,4.58-17.8,17.14-35.16,17.14a9.82,9.82,0,0,1-5.16-1.54,18.85,18.85,0,0,1-4.91-4.58q-2.38-3-3.81-5.24T468.25,110.67Z"
                    />
                    <path
                      className="cls-1"
                      d="M585.37,114.33q-5.57,4.17-17.47,12.38t-13.15,9.08q-1.17,6.59-2.23,11.54t-2.93,11.57a88.13,88.13,0,0,1-4,11.46,71.19,71.19,0,0,1-5.38,9.89,37,37,0,0,1-7.07,8.28,32.09,32.09,0,0,1-20.58,7.32q-16.41,0-16.41-14.58a19.44,19.44,0,0,1,.26-3.11q.26-1.58.55-2.86a14.59,14.59,0,0,1,1.1-3q.81-1.69,1.21-2.67a17.23,17.23,0,0,1,1.57-2.75q1.17-1.76,1.57-2.42t1.83-2.53l1.68-2.2q.26-.33,1.87-2.23t1.61-2q2.42-2.93,5.05-5.71t6-5.79q3.4-3,5.46-4.72t6.56-5.31q4.5-3.59,6-4.83l2-9Q531.68,128,523.92,128a16.65,16.65,0,0,1-13.33-5.93q-5.05-5.93-5.05-14.79a89.08,89.08,0,0,1,2.38-21.5,92.86,92.86,0,0,1,7-18.86,12.49,12.49,0,0,1,4.47-4.8,11.79,11.79,0,0,1,6.52-1.94,7.11,7.11,0,0,1,4.47,1.35,4.65,4.65,0,0,1,1.76,3.92,13.27,13.27,0,0,1-.55,3.77,40,40,0,0,1-1.5,4.14,35.38,35.38,0,0,0-1.39,3.81q-4.39,15.82-4.39,27,0,9.67,5.71,9.67a6.79,6.79,0,0,0,2.23-.37,5.87,5.87,0,0,0,2-1.17q.92-.8,1.69-1.57a8.62,8.62,0,0,0,1.5-2.23q.73-1.46,1.25-2.38a15.89,15.89,0,0,0,1.1-2.75q.59-1.83.88-2.67t.81-2.78q.51-1.94.62-2.42t.55-2.31l5.13-21.53a12.85,12.85,0,0,1,4.83-7.36,13.9,13.9,0,0,1,8.79-3,6.68,6.68,0,0,1,3.85,1,3.48,3.48,0,0,1,1.5,3.08q0,5.79-2.78,18t-3.08,14.28q-.44,2.86-1.76,10t-2,11.79c10.79-9,21.48-15.59,27.2-20.91.34-.29-1.09-.79-.68-1,1.88-.93,4.34,2.44,4.72,3,1.44,2,2.16,2.4,2.16,6.48m-77.05,74.71a12.72,12.72,0,0,0,7.65-2.6,22.23,22.23,0,0,0,5.82-6.26,51.6,51.6,0,0,0,4.25-8.9,88,88,0,0,0,3-9.12q1-3.88,1.87-8.28a72.83,72.83,0,0,0-14.28,12.6,58.18,58.18,0,0,0-10.11,15.6,11.33,11.33,0,0,0-1.1,4.25Q510.52,181.79,513.44,181.79Z"
                    />
                    <path
                      className="cls-1"
                      d="M574.47,130.18a7.9,7.9,0,0,1-6.34-2.6,10.14,10.14,0,0,1-2.23-6.85,5.76,5.76,0,0,1,1.21-3.66,17.11,17.11,0,0,1,3.08-3,12.85,12.85,0,0,0,2.6-2.45l25-35a41.3,41.3,0,0,0-8.42-1A31.55,31.55,0,0,0,581.18,77a30.44,30.44,0,0,1-7.58,1.35q-2.13,0-2.12-3.88a41.05,41.05,0,0,1,.44-6.41,21,21,0,0,1,1.5-5.16,8,8,0,0,1,3.15-3.7A9.7,9.7,0,0,1,581.73,58q4.54,0,11.9,2.64t12,2.64a55,55,0,0,0,5.86-.44,54.41,54.41,0,0,1,5.57-.44q3.3,0,4.65,1.65T623,69.17q0,3.66-1.32,5.09t-5,2.38a97,97,0,0,1-7.8,11.24q-4.58,5.75-11.24,13.22t-9,10.25l-.37,1.46a35.34,35.34,0,0,1,8.06,1.65,35.29,35.29,0,0,0,8.86,1.65,22.47,22.47,0,0,0,6.55-1,29,29,0,0,0,5-1.9q1.72-.91,5-3t4.29-2.71a10.75,10.75,0,0,1,5.49-1.54,4.14,4.14,0,0,1,3.26,1.46,5.16,5.16,0,0,1,1.28,3.52q0,4.25-3.84,8a30.11,30.11,0,0,1-9.45,6.15,68.27,68.27,0,0,1-11.54,3.74,47.93,47.93,0,0,1-10.55,1.35,26.59,26.59,0,0,1-6.74-1,57,57,0,0,1-5.71-1.76q-2-.77-6-2.53-.37.29-1.61,1.5t-2,1.87a9.19,9.19,0,0,1-1.94,1.28A4.93,4.93,0,0,1,574.47,130.18Z"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </Title>
          <TitleLarge>
            <Link to="/" className={styles.link_white}>
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width="260"
                height="80"
                viewBox="0 0 636.07 195.85"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M93.09,92.07A14.09,14.09,0,0,0,91,84.23a12.76,12.76,0,0,0-5.31-4.69A39.1,39.1,0,0,0,78.52,77q-4-1-7.95-1.83a48,48,0,0,1-7.25-2.09A12,12,0,0,1,58,69.21,10.53,10.53,0,0,1,56,62.55q0-3.59,1.46-4.8t5.35-1.21q2.12,0,5.71.26t5.64.26a50.39,50.39,0,0,0,13-1.54,26.57,26.57,0,0,0,9.23-4.17,18.05,18.05,0,0,0,5.24-6,15.29,15.29,0,0,0,1.76-7.18,18.59,18.59,0,0,0-2.67-9.34,29.46,29.46,0,0,0-7.54-8.46,38.47,38.47,0,0,0-12.56-6.15,57.59,57.59,0,0,0-16.85-2.34,78,78,0,0,0-17.32,1.9,59.8,59.8,0,0,0-16,6.19A41.63,41.63,0,0,0,17.8,30.47a61.47,61.47,0,0,0-4.1,6.63,47.61,47.61,0,0,1-5.27,7.8q-2.49,2.86-5.2,2.86Q0,47.75,0,40.36A28.84,28.84,0,0,1,2.64,28.13,32.14,32.14,0,0,1,9.92,18.05a54.34,54.34,0,0,1,10.95-7.84A69,69,0,0,1,34.53,4.54,110.58,110.58,0,0,1,65.92,0,82.62,82.62,0,0,1,78.37.92,69.57,69.57,0,0,1,89.43,3.48a63.88,63.88,0,0,1,9.52,4,49.23,49.23,0,0,1,8,5.09,51,51,0,0,1,6.34,5.93,35.16,35.16,0,0,1,4.65,6.48,31.37,31.37,0,0,1,2.78,6.81,26.17,26.17,0,0,1,1,6.92,23.14,23.14,0,0,1-1.5,8.28,22.36,22.36,0,0,1-4.8,7.43,31.63,31.63,0,0,1-8.06,6,46.45,46.45,0,0,1-11.65,4.14,74.18,74.18,0,0,1-15.23,1.72q13.26,0,21.17,7.69t7.91,20.65a30.63,30.63,0,0,1-1,7.8,27.64,27.64,0,0,1-2.82,6.92,36.37,36.37,0,0,1-4.39,6,37.23,37.23,0,0,1-5.71,5.16,61.23,61.23,0,0,1-14.36,7.76q-4,1.5-8.09,2.64t-8.39,1.87q-4.25.73-8.42,1.1t-8.2.37A69.49,69.49,0,0,1,33,132.75a28.47,28.47,0,0,1-10.8-4.54q-4.1-3-4.1-7.14,0-96.31,27.61-96.31,5.35,0,8.94,6a58.68,58.68,0,0,0-7.87,15.05A99.13,99.13,0,0,0,42,65.15q-1.58,10.58-2.2,20.73t-.62,22.52a9.58,9.58,0,0,0,2.16,6.34A12,12,0,0,0,47,118.47a26.09,26.09,0,0,0,8.09,1.14,43.47,43.47,0,0,0,10.07-1.25,49.67,49.67,0,0,0,10.22-3.66A44.58,44.58,0,0,0,84.3,109a26,26,0,0,0,6.37-7.69A19.09,19.09,0,0,0,93.09,92.07Z"
                    />
                    <path
                      className="cls-1"
                      d="M167.56,114.62a51.58,51.58,0,0,1-23.8,11.21,36.46,36.46,0,0,1-6,.51,25.5,25.5,0,0,1-9.3-1.65,21.87,21.87,0,0,1-7.62-5,22.45,22.45,0,0,1-5.24-9.08,42.7,42.7,0,0,1-1.87-13.26,56.48,56.48,0,0,1,1.21-11.72,46.26,46.26,0,0,1,3.7-10.8,37.54,37.54,0,0,1,6-8.9,25.59,25.59,0,0,1,19-8.28q8.57,0,13.92,5T162.87,76A23.41,23.41,0,0,1,161,85a27.32,27.32,0,0,1-4.8,7.73,42,42,0,0,1-6.88,6.15,48.71,48.71,0,0,1-7.95,4.69,55.61,55.61,0,0,1-8.13,3,12,12,0,0,0,2.23,4.32,8.16,8.16,0,0,0,3.15,2.38,10.15,10.15,0,0,0,3.85.7,20.06,20.06,0,0,0,6.52-1.25,37.87,37.87,0,0,0,6.92-3.22q3.33-2,5.68-3.59t4.32-3.15a8.91,8.91,0,0,1,2.16-1.54,4.65,4.65,0,0,1,2-.51,2.71,2.71,0,0,1,2.23,1.06,4.42,4.42,0,0,1,.84,2.82,10.5,10.5,0,0,1-1.35,4.69A19,19,0,0,1,167.56,114.62Zm-17.72-36.4a8.12,8.12,0,0,0-1.39-4.91,4.61,4.61,0,0,0-4-1.9,8.59,8.59,0,0,0-6,2.38,15.72,15.72,0,0,0-4,6.15,44.17,44.17,0,0,0-2.16,7.84,45.52,45.52,0,0,0-.73,8.09,49.82,49.82,0,0,0,5.42-2.6,56.29,56.29,0,0,0,5.82-3.77,20.12,20.12,0,0,0,5.05-5.24A10.93,10.93,0,0,0,149.83,78.22Z"
                    />
                    <path
                      className="cls-1"
                      d="M174.47,127.88a8.91,8.91,0,0,1-4.8-1.21,7.07,7.07,0,0,1-2.86-3.52,21.36,21.36,0,0,1-1.28-4.76,39.91,39.91,0,0,1-.37-5.82,158.48,158.48,0,0,1,2.27-26.51,123.14,123.14,0,0,1,6.15-23.51,8.88,8.88,0,0,1,2.49-3.92q1.39-1.06,4.76-1.06,3.66,0,4.47,1.25t.81,5.42v6.52q0,2.64.15,7.62h.81q.37-.73,1.5-3.08t1.72-3.52q.59-1.17,1.83-3.37a27.83,27.83,0,0,1,2.2-3.41q1-1.21,2.49-2.86a13.26,13.26,0,0,1,3-2.49,17.7,17.7,0,0,1,3.41-1.46,13,13,0,0,1,4-.62,7.22,7.22,0,0,1,5.16,1.9,6.54,6.54,0,0,1,2,5,83.53,83.53,0,0,1-1.13,8.46,72.25,72.25,0,0,0-1.14,10.73q0,8,6.3,8a14.08,14.08,0,0,0,6.7-2.05A37.93,37.93,0,0,0,231.75,85a4.48,4.48,0,0,1,2.78-1q2.2,0,2.2,4.76a16.59,16.59,0,0,1-.7,4.39,29,29,0,0,1-1.35,4L234,98.66,232,100.12q-1.83,1.32-2.42,1.68l-2.27,1.43a17.39,17.39,0,0,1-2.71,1.46l-2.64,1a14.45,14.45,0,0,1-3.11.84,21.51,21.51,0,0,1-3.11.22,16.83,16.83,0,0,1-7.32-1.5,15.08,15.08,0,0,1-5-3.66,18.83,18.83,0,0,1-3.22-5.82,42.4,42.4,0,0,1-1.94-6.74Q197.62,86,197,81.45h-1.17L182.75,118q-.15.29-.59,1.61t-.62,1.76l-.66,1.57a7.76,7.76,0,0,1-.84,1.61l-1,1.28a4,4,0,0,1-1.25,1.14,9.9,9.9,0,0,1-1.5.62A5.74,5.74,0,0,1,174.47,127.88Z"
                    />
                    <path
                      className="cls-1"
                      d="M276.28,64q0,4-4,25.63l1.39,1.54q9-21.09,19.12-31.71a6.4,6.4,0,0,1,4.83-1.9,8.64,8.64,0,0,1,5.49,1.72,5.67,5.67,0,0,1,2.2,4.72q0,2.64-.84,11.1T302.76,92.4q-.84,8.83-.84,12.27,0,1.54,0,2.45a21.74,21.74,0,0,0,.26,2.34,8.16,8.16,0,0,0,.59,2.2,4,4,0,0,0,1.14,1.39,3,3,0,0,0,1.94.62q2.86,0,7-3.44a70.28,70.28,0,0,0,7.91-7.84,16,16,0,0,1,2.38-2.34,3,3,0,0,1,1.65-.73q2.34,0,2.34,8.2v2.09c0,.32,0,.61,0,.88s0,.53,0,.77v.59l-3.11,2.89q-2.23,2.09-3.41,3.08t-3.37,2.75a26.12,26.12,0,0,1-3.92,2.67q-1.72.92-4,1.94a20.62,20.62,0,0,1-4.76,1.46,29.26,29.26,0,0,1-5.16.44,18,18,0,0,1-4.17-.44,11.61,11.61,0,0,1-3.15-1.21,7.74,7.74,0,0,1-2.27-2,11.22,11.22,0,0,1-1.5-2.6,17.9,17.9,0,0,1-.92-3.19,26.49,26.49,0,0,1-.48-3.59q-.11-1.76-.11-4a116.66,116.66,0,0,1,4.39-32.74q-5.64,10.55-10.44,21.86t-8.46,22.89a7,7,0,0,1-1.72,2.86,6.55,6.55,0,0,1-2.75,1.57,14.1,14.1,0,0,1-4,.48,5.26,5.26,0,0,1-3.44-1.14,6.58,6.58,0,0,1-2.05-3.15,21.49,21.49,0,0,1-.92-4.14,40.49,40.49,0,0,1-.26-4.83q0-3.52.33-7.14t1-7.4q.66-3.77,1.25-6.74t1.5-7.29q.91-4.32,1.43-6.88a171.81,171.81,0,0,0-11.46,20q-4.94,10.18-10.44,23.8a7.89,7.89,0,0,1-2.75,3.74,8,8,0,0,1-4.58,1.17,7.4,7.4,0,0,1-5.64-2.16,10.16,10.16,0,0,1-2.64-5.16,40.31,40.31,0,0,1-.59-7.54,148.36,148.36,0,0,1,2.09-24.5,163.6,163.6,0,0,1,5.53-23.18,11.38,11.38,0,0,1,3.41-5.13,8.22,8.22,0,0,1,5.53-2.05,6.48,6.48,0,0,1,4.72,1.83,6.38,6.38,0,0,1,1.87,4.76v.88a1.41,1.41,0,0,1-.07.44q-1,4.39-3,12.93t-2.75,11.54l1.46,1.54q10.4-23.07,20.8-31.71a7,7,0,0,1,1.17-.84,9.86,9.86,0,0,1,1.25-.59,6.51,6.51,0,0,1,1.39-.37,9.85,9.85,0,0,1,1.46-.11,7.22,7.22,0,0,1,5,1.76A6,6,0,0,1,276.28,64Z"
                    />
                    <path
                      className="cls-1"
                      d="M335.68,104.15q0,9.67,5.71,9.67a6.79,6.79,0,0,0,2.23-.37,5.87,5.87,0,0,0,2-1.17q.92-.8,1.69-1.57a8.62,8.62,0,0,0,1.5-2.23q.73-1.46,1.25-2.38a15.89,15.89,0,0,0,1.1-2.75q.59-1.83.88-2.67t.81-2.78q.51-1.94.62-2.42t.55-2.31l5.13-21.53A12.85,12.85,0,0,1,364,64.27a13.9,13.9,0,0,1,8.79-3,6.68,6.68,0,0,1,3.85,1,3.48,3.48,0,0,1,1.5,3.08q0,5.79-2.78,18t-3.08,14.28q-.44,2.86-1.76,10t-2,11.79q16.19-13.48,24.76-21.46a2.72,2.72,0,0,1,1.76-.44q2.56,0,4.72,3a10.78,10.78,0,0,1,2.16,6.48,5.94,5.94,0,0,1-1.21,3.66,18.74,18.74,0,0,1-3.92,3.59q-5.57,4.17-17.47,12.38t-13.15,9.08q-1.17,6.59-2.23,11.54T361,158.9a88.13,88.13,0,0,1-4,11.46,71.19,71.19,0,0,1-5.38,9.89,37,37,0,0,1-7.07,8.28A32.09,32.09,0,0,1,324,195.85q-16.41,0-16.41-14.58a19.44,19.44,0,0,1,.26-3.11q.26-1.58.55-2.86a14.59,14.59,0,0,1,1.1-3q.81-1.69,1.21-2.67a17.23,17.23,0,0,1,1.57-2.75q1.17-1.76,1.57-2.42t1.83-2.53l1.68-2.2q.26-.33,1.87-2.23t1.61-2q2.42-2.93,5.05-5.71t6-5.79q3.4-3,5.46-4.72t6.56-5.31q4.5-3.59,6-4.83l2-9Q343.08,128,335.31,128A16.65,16.65,0,0,1,322,122.09q-5.05-5.93-5.05-14.79a89.08,89.08,0,0,1,2.38-21.5,92.86,92.86,0,0,1,7-18.86,12.49,12.49,0,0,1,4.47-4.8,11.79,11.79,0,0,1,6.52-1.94,7.11,7.11,0,0,1,4.47,1.35,4.65,4.65,0,0,1,1.76,3.92,13.27,13.27,0,0,1-.55,3.77,40,40,0,0,1-1.5,4.14,35.38,35.38,0,0,0-1.39,3.81Q335.68,93,335.68,104.15Zm-10.84,77.64a12.72,12.72,0,0,0,7.65-2.6,22.23,22.23,0,0,0,5.82-6.26,51.6,51.6,0,0,0,4.25-8.9,88,88,0,0,0,3-9.12q1-3.88,1.87-8.28a72.83,72.83,0,0,0-14.28,12.6A58.18,58.18,0,0,0,323,174.83a11.33,11.33,0,0,0-1.1,4.25Q321.91,181.79,324.84,181.79Z"
                    />
                    <path
                      className="cls-1"
                      d="M417.05,102q5.93,0,9.16,3t3.22,8.83q0,6.37-3.66,10.18t-10.11,3.81q-5.86,0-8.94-3T403.65,116q0-6.44,3.52-10.22T417.05,102Z"
                    />
                    <path
                      className="cls-1"
                      d="M468.25,110.67q-.88,1-2.93,3.7T461.55,119q-1.72,2-4,4.21a18,18,0,0,1-4.65,3.44,10.59,10.59,0,0,1-4.76,1.21,13.69,13.69,0,0,1-6.78-1.61,11.6,11.6,0,0,1-4.54-4.54,25.31,25.31,0,0,1-2.49-6.3,36.15,36.15,0,0,1-1-7.47l10.55-6.3q1.83,8.5,5,8.5a5.54,5.54,0,0,0,3.48-1.76,21.38,21.38,0,0,0,3.26-3.66q1.32-1.9,3.19-4.83t2.31-3.52a216,216,0,0,1-8.79-25,4.27,4.27,0,0,1-.15-.73q0-3.08,3.92-5.75a13.5,13.5,0,0,1,7.58-2.67,5.18,5.18,0,0,1,4,2.2,16.89,16.89,0,0,1,2.78,4.61q1,2.42,2.23,6.15t1.72,4.83A106.07,106.07,0,0,1,492.71,64.6a11.79,11.79,0,0,1,6.37-2.27,6,6,0,0,1,5.09,2.42,9.8,9.8,0,0,1,1.79,6q0,5.49-3.88,7.91a110.27,110.27,0,0,0-20.51,17.29q.22.37,1.25,2.56t1.68,3.44q.66,1.25,1.9,3.33a22.63,22.63,0,0,0,2.27,3.26,12.24,12.24,0,0,0,2.38,2.09,4.66,4.66,0,0,0,2.6.92q10.11,0,23.36-14.72Q519.59,94,521.28,94q2.34,0,2.34,5.35a28.49,28.49,0,0,1-.88,6.85q-.88,3.55-1.9,4.58-17.8,17.14-35.16,17.14a9.82,9.82,0,0,1-5.16-1.54,18.85,18.85,0,0,1-4.91-4.58q-2.38-3-3.81-5.24T468.25,110.67Z"
                    />
                    <path
                      className="cls-1"
                      d="M585.37,114.33q-5.57,4.17-17.47,12.38t-13.15,9.08q-1.17,6.59-2.23,11.54t-2.93,11.57a88.13,88.13,0,0,1-4,11.46,71.19,71.19,0,0,1-5.38,9.89,37,37,0,0,1-7.07,8.28,32.09,32.09,0,0,1-20.58,7.32q-16.41,0-16.41-14.58a19.44,19.44,0,0,1,.26-3.11q.26-1.58.55-2.86a14.59,14.59,0,0,1,1.1-3q.81-1.69,1.21-2.67a17.23,17.23,0,0,1,1.57-2.75q1.17-1.76,1.57-2.42t1.83-2.53l1.68-2.2q.26-.33,1.87-2.23t1.61-2q2.42-2.93,5.05-5.71t6-5.79q3.4-3,5.46-4.72t6.56-5.31q4.5-3.59,6-4.83l2-9Q531.68,128,523.92,128a16.65,16.65,0,0,1-13.33-5.93q-5.05-5.93-5.05-14.79a89.08,89.08,0,0,1,2.38-21.5,92.86,92.86,0,0,1,7-18.86,12.49,12.49,0,0,1,4.47-4.8,11.79,11.79,0,0,1,6.52-1.94,7.11,7.11,0,0,1,4.47,1.35,4.65,4.65,0,0,1,1.76,3.92,13.27,13.27,0,0,1-.55,3.77,40,40,0,0,1-1.5,4.14,35.38,35.38,0,0,0-1.39,3.81q-4.39,15.82-4.39,27,0,9.67,5.71,9.67a6.79,6.79,0,0,0,2.23-.37,5.87,5.87,0,0,0,2-1.17q.92-.8,1.69-1.57a8.62,8.62,0,0,0,1.5-2.23q.73-1.46,1.25-2.38a15.89,15.89,0,0,0,1.1-2.75q.59-1.83.88-2.67t.81-2.78q.51-1.94.62-2.42t.55-2.31l5.13-21.53a12.85,12.85,0,0,1,4.83-7.36,13.9,13.9,0,0,1,8.79-3,6.68,6.68,0,0,1,3.85,1,3.48,3.48,0,0,1,1.5,3.08q0,5.79-2.78,18t-3.08,14.28q-.44,2.86-1.76,10t-2,11.79c10.79-9,21.48-15.59,27.2-20.91.34-.29-1.09-.79-.68-1,1.88-.93,4.34,2.44,4.72,3,1.44,2,2.16,2.4,2.16,6.48m-77.05,74.71a12.72,12.72,0,0,0,7.65-2.6,22.23,22.23,0,0,0,5.82-6.26,51.6,51.6,0,0,0,4.25-8.9,88,88,0,0,0,3-9.12q1-3.88,1.87-8.28a72.83,72.83,0,0,0-14.28,12.6,58.18,58.18,0,0,0-10.11,15.6,11.33,11.33,0,0,0-1.1,4.25Q510.52,181.79,513.44,181.79Z"
                    />
                    <path
                      className="cls-1"
                      d="M574.47,130.18a7.9,7.9,0,0,1-6.34-2.6,10.14,10.14,0,0,1-2.23-6.85,5.76,5.76,0,0,1,1.21-3.66,17.11,17.11,0,0,1,3.08-3,12.85,12.85,0,0,0,2.6-2.45l25-35a41.3,41.3,0,0,0-8.42-1A31.55,31.55,0,0,0,581.18,77a30.44,30.44,0,0,1-7.58,1.35q-2.13,0-2.12-3.88a41.05,41.05,0,0,1,.44-6.41,21,21,0,0,1,1.5-5.16,8,8,0,0,1,3.15-3.7A9.7,9.7,0,0,1,581.73,58q4.54,0,11.9,2.64t12,2.64a55,55,0,0,0,5.86-.44,54.41,54.41,0,0,1,5.57-.44q3.3,0,4.65,1.65T623,69.17q0,3.66-1.32,5.09t-5,2.38a97,97,0,0,1-7.8,11.24q-4.58,5.75-11.24,13.22t-9,10.25l-.37,1.46a35.34,35.34,0,0,1,8.06,1.65,35.29,35.29,0,0,0,8.86,1.65,22.47,22.47,0,0,0,6.55-1,29,29,0,0,0,5-1.9q1.72-.91,5-3t4.29-2.71a10.75,10.75,0,0,1,5.49-1.54,4.14,4.14,0,0,1,3.26,1.46,5.16,5.16,0,0,1,1.28,3.52q0,4.25-3.84,8a30.11,30.11,0,0,1-9.45,6.15,68.27,68.27,0,0,1-11.54,3.74,47.93,47.93,0,0,1-10.55,1.35,26.59,26.59,0,0,1-6.74-1,57,57,0,0,1-5.71-1.76q-2-.77-6-2.53-.37.29-1.61,1.5t-2,1.87a9.19,9.19,0,0,1-1.94,1.28A4.93,4.93,0,0,1,574.47,130.18Z"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </TitleLarge>
          <Navigation>
            <NavIcon>
              <Link to="/buses" className={styles.link_white}>
                <svg
                  fill="#fff"
                  viewBox="0 0 24 24"
                  height="47"
                  width="47"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z" />
                </svg>
              </Link>
              <Link to="/buses" className={styles.link_white_large}>
                Bus Schedules
              </Link>
            </NavIcon>
            <NavIcon>
              <Link to="/ferries" className={styles.link_white}>
                <svg
                  fill="#fff"
                  viewBox="0 0 24 24"
                  className="w-100"
                  height="47"
                  width="47"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
                </svg>
              </Link>
              <Link to="/ferries" className={styles.link_white_large}>
                Ferry Schedules
              </Link>
            </NavIcon>
          </Navigation>
        </Header>
        <Routes />
        <Footer>
          <div className={css(tachyons('pr2'))}>Made with &hearts; by</div>
          <a className={styles.link} href="http://jelly.one">
            <svg
              fill="#5e2ca5"
              height="40"
              width="96"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 533.67 221.46"
            >
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path d="M101,66a8,8,0,1,1-8,8,8,8,0,0,1,8-8" />
                  <path d="M79.82,75.18H63.5A3.53,3.53,0,0,0,60,78.62a3.28,3.28,0,0,0,1.38,2.76,16.26,16.26,0,0,0,20.46,0,3.27,3.27,0,0,0,1.38-2.76,3.54,3.54,0,0,0-3.45-3.45" />
                  <path d="M39.59,66a8,8,0,1,1-8,8,8,8,0,0,1,8-8" />
                  <path d="M150.28,130.53A20.44,20.44,0,0,1,138,121.67a12.57,12.57,0,0,1,.74-14.78l2-2.46a44.73,44.73,0,0,0,5.17-48.27L137,38.67C125.41,15.52,102,.25,76.15,0A68.53,68.53,0,0,0,14.09,37.68L5,55.91c-7.88,15.76-6.4,34.73,4.43,48.52a41.72,41.72,0,0,0,5.42,5.91,13.09,13.09,0,0,1,4.43,9.6V164a7,7,0,0,0,6.16,7.14,6.93,6.93,0,0,0,7.63-6.9V127.09a5.77,5.77,0,0,1,6.4-5.67,5.44,5.44,0,0,1,4.93,5.67v62.06a7,7,0,0,0,6.16,7.14,6.93,6.93,0,0,0,7.63-6.9v-65a5.8,5.8,0,0,1,4.68-5.66h.25a5.46,5.46,0,0,1,6.4,5.42v52.21a7,7,0,0,0,6.16,7.14,6.93,6.93,0,0,0,7.63-6.9v-52a5.54,5.54,0,0,1,6.65-5.42h.25a5.54,5.54,0,0,1,4.68,5.42v89.65a7,7,0,0,0,6.16,7.14,6.93,6.93,0,0,0,7.63-6.9V127.33a7.14,7.14,0,0,1,5.67-7.14.9.9,0,0,0,.74-.25,7.15,7.15,0,0,1,8.13,4.19,35.61,35.61,0,0,0,23.15,19.7,7.08,7.08,0,0,0,8.87-6.9c.25-3-2-5.42-4.93-6.4M121.2,89.43a28.67,28.67,0,0,1-29.66,9.89,81.29,81.29,0,0,0-40.69,0L49,99.77a28.73,28.73,0,0,1-29.43-9.88,28.32,28.32,0,0,1-3.22-31l8.73-17.7A49.86,49.86,0,0,1,70.39,12.88a50.9,50.9,0,0,1,45.52,28l8.73,17.24c4.83,10.58,3.68,22.3-3.45,31.26" />
                  <path d="M288.22,127.21a39.24,39.24,0,0,1-9.63-1.61,97.35,97.35,0,0,1-12-4.32,176.75,176.75,0,0,1-7.73,24.79A142.78,142.78,0,0,1,249,166.24a99.66,99.66,0,0,1-11.32,15.56,76.69,76.69,0,0,1-12.08,11,50.59,50.59,0,0,1-12.16,6.59,33.93,33.93,0,0,1-11.61,2.2,24.73,24.73,0,0,1-10.73-2.34,24,24,0,0,1-8.61-7,34.73,34.73,0,0,1-5.75-11.54,55.45,55.45,0,0,1-2.09-16,58.37,58.37,0,0,1,3.77-20.18A74.87,74.87,0,0,1,189.12,125a81.1,81.1,0,0,1,16.77-16.41,73.15,73.15,0,0,1,21.9-10.95,134.63,134.63,0,0,1-11.65-10.62,88.54,88.54,0,0,1-9.45-11.39A57.4,57.4,0,0,1,200.36,64a32.06,32.06,0,0,1-2.31-11.76A59.63,59.63,0,0,1,199.7,38a58.69,58.69,0,0,1,4.54-12.49,52.2,52.2,0,0,1,6.85-10.4,47.68,47.68,0,0,1,8.5-7.91,38.19,38.19,0,0,1,9.48-5A29.45,29.45,0,0,1,239,.42a26,26,0,0,1,12.71,3.37,31.25,31.25,0,0,1,10.88,10.69q4.76,7.32,7.62,19t2.86,28.12q0,11.94-.84,22.67c-.56,7.15-1.38,15-2.45,21.54a35.79,35.79,0,0,0,13.73,8.15,66.32,66.32,0,0,1,10.35,4.44Zm-94.85,42.19q0,7.47,2.89,11.32a9.12,9.12,0,0,0,7.65,3.84q4.83,0,10.95-4.25t12.27-13.15a119.74,119.74,0,0,0,11.76-22.6A185.23,185.23,0,0,0,248.37,112l-2.71-1.68a50.74,50.74,0,0,0-14.25,5.09,70.5,70.5,0,0,0-12.6,8.61,76.81,76.81,0,0,0-10.51,10.95,88.21,88.21,0,0,0-8,12,64,64,0,0,0-5.13,11.9A36,36,0,0,0,193.37,169.39ZM216.81,47.52a28.5,28.5,0,0,0,2.56,11.65,51,51,0,0,0,7.18,11.46,92.56,92.56,0,0,0,11,11.24,171.54,171.54,0,0,0,14.06,11q1.25-10.18,2-21.42t.73-23.91a82.37,82.37,0,0,0-1.1-14.61,36.9,36.9,0,0,0-3-9.7,13.31,13.31,0,0,0-4.39-5.38,9.57,9.57,0,0,0-5.31-1.65A12.76,12.76,0,0,0,235,17.49a23.6,23.6,0,0,0-5.42,3.63,36.52,36.52,0,0,0-5,5.38,40.13,40.13,0,0,0-4.06,6.56,40.6,40.6,0,0,0-2.75,7.18A27.16,27.16,0,0,0,216.81,47.52Z" />
                  <path d="M353.75,150.29a10.19,10.19,0,0,1-7.36-3.48,30.41,30.41,0,0,1-5.93-9.34,63.6,63.6,0,0,1-4-13.59,89.22,89.22,0,0,1-1.43-16.22,115.37,115.37,0,0,1,1-14.17q1-7.65,2.78-15.78t4.36-16.33a165.83,165.83,0,0,1,5.71-15.75,132.82,132.82,0,0,1,6.92-14.1,76.54,76.54,0,0,1,7.84-11.43,36.83,36.83,0,0,1,8.57-7.65,17,17,0,0,1,9.08-2.78,8.89,8.89,0,0,1,5.2,1.43,9.91,9.91,0,0,1,3.22,3.77,18.36,18.36,0,0,1,1.65,5.31,38.19,38.19,0,0,1,.48,6,65,65,0,0,1-1.58,14A108.57,108.57,0,0,1,386,54.6q-2.67,7.22-6.19,14.47T372.5,83.46q-3.81,7.14-7.65,14.06c-2.56,4.61-5.92,10.74-8,15.42-2.58,5.87-2.09,9.45-2.09,9.45a16.77,16.77,0,0,0,.4,3.7,19.89,19.89,0,0,0,1,3.22,5.45,5.45,0,0,0,5.45,2.78c5.41-.51,11.6-4.83,14.6-9.2s4.63-10.37,9.88-18.25c.73-1.09,5.8,16.73,5.8,16.73-3.43,14.52-13.18,20-21,23.69-2,.94-4,1.89-6,2.67a46.13,46.13,0,0,1-5.86,1.87A22.61,22.61,0,0,1,353.75,150.29Zm.07-56.59c2.2-3.91,4.53-10.3,7-15.18s4.8-9.91,7-15.09,4.1-10.34,5.71-15.49a72.35,72.35,0,0,0,3.08-14.39q0-2.12-.11-3.63t-.7-1.5q-2.13,0-4.58,2.75a36.92,36.92,0,0,0-4.91,7.43,86.81,86.81,0,0,0-4.69,10.91q-2.24,6.23-4,13.26a136.54,136.54,0,0,0-2.78,14.47A136.2,136.2,0,0,0,353.82,93.7Z" />
                  <path d="M391.86,150.29a10.19,10.19,0,0,1-7.36-3.48,30.41,30.41,0,0,1-5.93-9.34,63.61,63.61,0,0,1-4-13.59,89.22,89.22,0,0,1-1.43-16.22,115.35,115.35,0,0,1,1-14.17q1-7.65,2.78-15.78t4.36-16.33A165.84,165.84,0,0,1,387,45.63a132.78,132.78,0,0,1,6.92-14.1,76.53,76.53,0,0,1,7.84-11.43,36.83,36.83,0,0,1,8.57-7.65,17,17,0,0,1,9.08-2.78,8.89,8.89,0,0,1,5.2,1.43,9.91,9.91,0,0,1,3.22,3.77,18.36,18.36,0,0,1,1.65,5.31,38.19,38.19,0,0,1,.48,6,65,65,0,0,1-1.58,14,108.59,108.59,0,0,1-4.25,14.36q-2.67,7.22-6.19,14.47t-7.32,14.39Q406.81,90.6,403,97.52T395.75,111a15.94,15.94,0,0,0-.77,1.9q-.4,1.17-.77,2.53t-.73,2.89q-.37,1.54-.59,3v1c0,1.27,2.62,10.92,7.07,9.45a29.94,29.94,0,0,0,5-2.07c3-1.63,5.44-3.5,6.7-12.09.38-2.6,12.67,5.84,12.67,5.84-4.35,3.13-3.56,9.6-7,14-4.87,6.25-12.27,9.44-14.27,10.22a46.13,46.13,0,0,1-5.86,1.87A22.61,22.61,0,0,1,391.86,150.29Zm-4-47.63q3.3-5.86,7-13.18c2.47-4.88,8.89-20.88,11.09-26.06s4.1-10.34,5.71-15.49a72.36,72.36,0,0,0,3.08-14.39q0-2.12-.11-3.63t-.7-1.5c-1.42,0-1.42.11-4.58,2.75s-8.18,11.12-10.59,18.35S395.18,60.11,394,64.8s-4.46,18.44-5.14,23.4A105.71,105.71,0,0,0,387.84,102.66Z" />
                  <path d="M461.76,150.88c-.93,5.22-3.61,19.1-4.87,24.05a112.31,112.31,0,0,1-4.5,13.92,78.53,78.53,0,0,1-5.93,11.9,43.69,43.69,0,0,1-7.54,9.3,31.81,31.81,0,0,1-9.41,6,29.71,29.71,0,0,1-11.5,2.16,31,31,0,0,1-5.38-.51,14.85,14.85,0,0,1-5.35-2.05,12,12,0,0,1-4.06-4.39,15.49,15.49,0,0,1-1.61-7.62,20,20,0,0,1,1.68-7.43,54.37,54.37,0,0,1,4.61-8.71,103.07,103.07,0,0,1,7-9.52q4-4.95,8.75-9.85c3.15-3.27,14.5-13.69,19.87-17.65l2.43-7.91a38.55,38.55,0,0,1-8.24,5.68,18.42,18.42,0,0,1-8.31,2.16,17.22,17.22,0,0,1-6.85-1.43,17.81,17.81,0,0,1-5.9-4.1,20,20,0,0,1-4.1-6.52,23.2,23.2,0,0,1-1.54-8.68,101.54,101.54,0,0,1,.62-11.72,84.72,84.72,0,0,1,1.79-10.18,72.74,72.74,0,0,1,2.93-9.34q1.76-4.5,4-9.12a11.57,11.57,0,0,1,4.83-5,12.79,12.79,0,0,1,6.15-1.72,7.48,7.48,0,0,1,4.39,1.28,4.54,4.54,0,0,1,1.83,4,9.42,9.42,0,0,1-.18,1.76,11.39,11.39,0,0,1-.62,2.05q-1.32,3.37-2.6,7.95T431.87,109q-1,4.8-1.57,9.41a65.28,65.28,0,0,0-.59,8.13,24.07,24.07,0,0,0,.26,3.55,10.54,10.54,0,0,0,.92,3.08,6,6,0,0,0,1.76,2.2,4.44,4.44,0,0,0,2.78.84,6.61,6.61,0,0,0,4.91-2.34,22.83,22.83,0,0,0,3.81-5.64,40.52,40.52,0,0,0,2.6-6.81,41.57,41.57,0,0,0,1.28-5.86L453.15,94a11.42,11.42,0,0,1,2.09-4.43,15,15,0,0,1,3.44-3.26,15.25,15.25,0,0,1,4.07-2,13.59,13.59,0,0,1,4-.66,6.91,6.91,0,0,1,3.81,1,3.43,3.43,0,0,1,1.54,3.11,6.46,6.46,0,0,1-.22,1.54q-.44,1.91-1.1,5.2T469.37,102q-.77,4.17-1.57,8.83t-1.54,9.27c-1.22,7.23-1.73,8.47-3,16.77,1.33-.92,21.17-12.5,30.33-12.5,6.08,0,9.33,6,8.58,10.58s-3.12,6.33-6.62,7.37c-2.11.63-5.82.37-7.77-2-1.52-1.81-2.6-3.17-8.94,0A124.16,124.16,0,0,0,461.76,150.88ZM418.87,204.2a10.47,10.47,0,0,0,5.82-1.79,21.33,21.33,0,0,0,5.05-4.72A40.5,40.5,0,0,0,434,191a73.77,73.77,0,0,0,3.37-7.65q1.46-3.92,2.49-7.65c.68-2.49,2-6.82,2.77-9.82-4.37,3.25-10.76,10-18.5,19.63A130.21,130.21,0,0,0,417,197.24a11.33,11.33,0,0,0-1.1,4.25Q415.94,204.2,418.87,204.2Z" />
                  <path d="M491.84,109.53q.71-7.34,2.14-15.14t3.28-15.6q1.85-7.8,4-15.43t4.17-14.61q2.07-7,4-13.11t3.31-11a14.43,14.43,0,0,1,2.67-5.52,13.54,13.54,0,0,1,3.88-3.28,14.71,14.71,0,0,1,4.52-1.6,26.11,26.11,0,0,1,4.6-.43,7.79,7.79,0,0,1,2.14.29,3.74,3.74,0,0,1,1.71,1,5,5,0,0,1,1.1,2.07,12.13,12.13,0,0,1,.39,3.38,29.55,29.55,0,0,1-.18,3.1q-.18,1.68-.61,3.81a147.54,147.54,0,0,1-4.63,16.71q-2.85,8.37-6.84,18t-9.08,21.13Q507.23,94.78,501,109.53a3,3,0,0,1-.75,1.46,5.33,5.33,0,0,1-1.46,1.14,8.26,8.26,0,0,1-3.78,1,4.46,4.46,0,0,1-2.32-.57,2.06,2.06,0,0,1-1-1.92A5.86,5.86,0,0,1,491.84,109.53Z" />
                  <path d="M314.21,149.3a38.48,38.48,0,0,1-8.68,1,27.44,27.44,0,0,1-12-2.49,24.9,24.9,0,0,1-8.61-6.7,28.64,28.64,0,0,1-5.16-9.74A38.8,38.8,0,0,1,278,119.75a51.75,51.75,0,0,1,3.26-17.65,47.05,47.05,0,0,1,4.14-8.39,33.27,33.27,0,0,1,5.82-7,26.9,26.9,0,0,1,7.47-4.83,22.87,22.87,0,0,1,9.19-1.79,21.52,21.52,0,0,1,7.62,1.32,18.66,18.66,0,0,1,6.12,3.7,16.77,16.77,0,0,1,4.07,5.75,18.73,18.73,0,0,1,1.46,7.54,20.43,20.43,0,0,1-2.23,9.08,33.13,33.13,0,0,1-6.19,8.57,43.65,43.65,0,0,1-9.41,7.18c-3.64,2.1-6.65,3.19-12.34,4.19a34.56,34.56,0,0,0,2.67,4,9.85,9.85,0,0,0,2.16,2.05,7.16,7.16,0,0,0,2.31,1,11,11,0,0,0,2.6.29A33,33,0,0,0,317,133a65.29,65.29,0,0,0,11.5-5.5C348.25,114.43,350,100.12,352.09,96c3.56-7,1.54,16.13,3.79,19.46C338.88,140.39,317.07,148.64,314.21,149.3Zm-18.42-33.44a14.49,14.49,0,0,0,5.75-1.35,25.82,25.82,0,0,0,5.79-3.48,24.3,24.3,0,0,0,4.5-4.61,8.21,8.21,0,0,0,1.83-4.83,10.88,10.88,0,0,0-1.21-5.42q-1.21-2.12-3-2.12a11.47,11.47,0,0,0-5.38,1.17,11.7,11.7,0,0,0-3.74,3A15.74,15.74,0,0,0,298,102.5a28.84,28.84,0,0,0-1.39,4.8,36.39,36.39,0,0,0-.62,4.69Q295.79,114.26,295.79,115.87Z" />
                </g>
              </g>
            </svg>
          </a>
        </Footer>
      </Main>
    </OnRouteChange>
  </Router>
)
