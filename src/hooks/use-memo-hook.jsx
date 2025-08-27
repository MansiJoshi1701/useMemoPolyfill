import { useEffect, useRef } from "react"

const useCustomMemo = (callback , deps) => {

    //variable or state --> for cached value
    //Since we have to 'cache' this value across multiple renders, hence useRef hook is used
    const memoizedRef = useRef();
    
    const areEqual = (prevDeps , curDeps) => {

        if(!prevDeps) return false;

        if(prevDeps.length !== curDeps.length) return false;

        for(let i = 0 ; i < prevDeps.length ; i++){
            if(prevDeps[i] !== curDeps[i]) return false;
        }

        return true;
    }

    //track changes in deps
    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps,deps)){
        console.log("Updating memoizedRef");
        memoizedRef.current = {
            value: callback(),
            deps
        }
    }
    //cleanup logic
    useEffect(() => {
        return () => {
            memoizedRef.current = null;
        }
    } , [])

    
    //return memoized value
    return memoizedRef.current.value;
}

export default useCustomMemo;