import { useEffect } from "react";
import type { ComponentType } from "react";

function withLogger<P>(
  WrappedComponent: ComponentType<P>,
  componentName: string
) {
  function LoggerComponent(props: P) {
    useEffect(() => {
      console.log(`${componentName} mounted`);

      return () => {
        console.log(`${componentName} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  return LoggerComponent;
}

export default withLogger;