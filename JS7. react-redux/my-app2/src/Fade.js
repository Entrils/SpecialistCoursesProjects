import { Transition } from 'react-transition-group';
const duration = 300;
const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export const Fade = function({in: inProp}){
    return <Transition in={inProp} timeout={duration}>
        {state => (
        <div style={{
            transition: `opacity ${duration}ms ease-in`,
            opacity: 0,
            ...transitionStyles[state]
        }}>
            Привет, мир!
        </div>
)}
    </Transition>
}