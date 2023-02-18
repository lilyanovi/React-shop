import './modal.scss'

export function Modal ({active, setActive, children}) {

    return (
        <>
            <div className={active ? 'modal_active' : 'modal'} onClick={() => setActive(false)}>
               <div onClick={e => e.stopPropagation()}>
                    {children}
               </div>
            </div>
        </>
    )
}
