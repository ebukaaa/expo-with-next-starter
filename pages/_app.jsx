import "setimmediate";

export function useApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default useApp;
