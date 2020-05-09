import 'normalize.css';
import '../styles.css'
import Layout from '../components/layout'
// import NProgress from 'nprogress';
// import Router, { useRouter } from 'next/router';
// import React, { useState, useEffect } from 'react';

// // function Loading() {
//     const router = useRouter();
//
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//         const handleStart = (url) => (url !== router.pathname) && setLoading(true);
//         const handleComplete = (url) => (url !== router.pathname) && setLoading(false);
//
//         router.events.on('routeChangeStart', handleStart)
//         router.events.on('routeChangeComplete', handleComplete)
//         router.events.on('routeChangeError', handleComplete)
//
//         return () => {
//             router.events.off('routeChangeStart', handleStart)
//             router.events.off('routeChangeComplete', handleComplete)
//             router.events.off('routeChangeError', handleComplete)
//         }
//     })
//
//     return loading && (<div>Loading....{/*I have an animation here*/}</div>);
// }
//
//
//
// // import PropTypes from 'prop-types';
//
// /* eslint-disable react/prefer-stateless-function */
// // class NextNProgress extends React.Component {
//   static defaultProps = {
//     color: '#29D',
//     startPosition: 0.3,
//     stopDelayMs: 200,
//     height: 3,
//   };
//
//   timer = null;
//
//   routeChangeStart = () => {
//     NProgress.set(this.props.startPosition);
//     NProgress.start();
//   };
//
//   routeChangeEnd = () => {
//     clearTimeout(this.timer);
//     this.timer = setTimeout(() => {
//       NProgress.done(true);
//     }, this.props.stopDelayMs);
//   };
//
//   render() {
//     const { color, height } = this.props;
//
//     return (
//       <style jsx global>{`
//         #nprogress {
//           pointer-events: none;
//         }
//         #nprogress .bar {
//           background: ${color};
//           position: fixed;
//           z-index: 1031;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: ${height}px;
//         }
//         #nprogress .peg {
//           display: block;
//           position: absolute;
//           right: 0px;
//           width: 100px;
//           height: 100%;
//           box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
//           opacity: 1;
//           -webkit-transform: rotate(3deg) translate(0px, -4px);
//           -ms-transform: rotate(3deg) translate(0px, -4px);
//           transform: rotate(3deg) translate(0px, -4px);
//         }
//         #nprogress .spinner {
//           display: "block";
//           position: fixed;
//           z-index: 1031;
//           top: 15px;
//           right: 15px;
//         }
//         #nprogress .spinner-icon {
//           width: 18px;
//           height: 18px;
//           box-sizing: border-box;
//           border: solid 2px transparent;
//           border-top-color: ${color};
//           border-left-color: ${color};
//           border-radius: 50%;
//           -webkit-animation: nprogresss-spinner 400ms linear infinite;
//           animation: nprogress-spinner 400ms linear infinite;
//         }
//         .nprogress-custom-parent {
//           overflow: hidden;
//           position: relative;
//         }
//         .nprogress-custom-parent #nprogress .spinner,
//         .nprogress-custom-parent #nprogress .bar {
//           position: absolute;
//         }
//         @-webkit-keyframes nprogress-spinner {
//           0% {
//             -webkit-transform: rotate(0deg);
//           }
//           100% {
//             -webkit-transform: rotate(360deg);
//           }
//         }
//         @keyframes nprogress-spinner {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>);
//   }
//
//   componentDidMount() {
//     const { options } = this.props;
//
//     if (options) {
//       NProgress.configure(options);
//     }
//
//     Router.events.on('routeChangeStart', this.routeChangeStart);
//     Router.events.on('routeChangeComplete', this.routeChangeEnd);
//     Router.events.on('routeChangeError', this.routeChangeEnd);
//   }
// }
//
// // NextNProgress.propTypes = {
//   color: PropTypes.string,
//   startPosition: PropTypes.number,
//   stopDelayMs: PropTypes.number,
//   options: PropTypes.object,
// };
//
//
//
// // Router.onRouteChangeStart = () => {
// //   // console.log('onRouteChnageStart triggered');
// //   NProgress.start();
// // };
// //
// // Router.onRouteChangeComplete = () => {
// //   // console.log('onRouteChnageComplete triggered');
// //   NProgress.done();
// // };
// //
// // Router.onRouteChangeError = () => {
// //   // console.log('onRouteChnageError triggered');
// //   NProgress.done();
// // };

export default function MyApp({ Component, pageProps }) {
  return <Layout>
		  <Component {...pageProps} />
	</Layout>

}
