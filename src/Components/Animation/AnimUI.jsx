import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gsap } from 'gsap';
import s from './AnimUI.module.scss'

export default function AnimUI() {

  const router = useRouter();
  const [isCovered, setIsCovered] = useState(false);

  useEffect(() => {

    const tl = gsap.timeline();

    const onStart = () => {
      tl.to('.s.bar', {
        y: '0%', 
        ease: 'power4.inOut',
        stagger: 0.1
      })
      setIsCovered(true);
    };

    const onComplete = () => {
      if(isCovered) {
        tl.reverse();
      }
    };

    router.events.on('routeChangeStart', onStart); 
    router.events.on('routeChangeComplete', onComplete);

    return () => {
      // Clean up handlers
    };

  }, [router])

  return (
    <>
      <div className={s.bar}></div>
      <div className={s.bar1}></div>
      <div className={s.bar2}></div>
      <div className={s.bar3}></div>
    </>
  )
}