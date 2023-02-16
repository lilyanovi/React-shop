import style from './modal.module.css'

export function Modal ({active, setActive, children}) {

    return (
        <>
            <div className={active ? style.modal_active : style.modal} onClick={() => setActive(false)}>
               <div onClick={e => e.stopPropagation()}>
                    {children}
               </div>
            </div>
        </>
    )
}
