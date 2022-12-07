"use client"
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';
import Loading from '../app/loading';

export default function SplineHomepage() {
  return (
    <div className='h-max w-max'>
        <Suspense fallback={<Loading />}>
            <Spline scene="https://prod.spline.design/RMsnDuIXXhETAsoj/scene.splinecode" width={"1000px"} height={"800px"}/>
        </Suspense>
    </div>
  )
}
