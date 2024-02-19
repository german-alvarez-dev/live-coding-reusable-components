import icon from './../assets/basic_exclamation.svg'

const Notification = ({
    author,
    message,
    topPosition,
    mins,
    closeButton,
    animation,
    variant,
    warning,
    avatar,
    action,
    showMessage
}) => {

    const notificationStyles = {
        main: {
            maxWidth: "350px",
            overflow: "hidden",
            fontSize: ".875rem",
            backgroundColor: variant === 'dark' ? 'black' : warning ? '#fdb3b3' : "rgba(255, 255, 255, .85)",
            backgroundClip: "padding-box",
            border: "1px solid rgba(0, 0, 0, .1)",
            boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, .1)",
            backdropFilter: "blur(10px)",
            borderRadius: "0.25rem",
            animationName: animation,
            animationDuration: "1s",
            animationTimingFunction: "cubic-bezier(.14, .67, .34, .99)",
            position: "fixed",
            width: "400px",
            height: "80px",
            top: `${topPosition}px`
        },
        header: {
            display: "flex",
            alignItems: "center",
            padding: "0.25rem 0.75rem",
            color: "#6c757d",
            backgroundColor: "rgba(255, 255, 255, .85)",
            backgroundClip: "padding-box",
            borderBottom: "1px solid rgba(0, 0, 0, .05)"
        },
        image: { width: "15px", marginRight: "5px", opacity: 0.7, filter: "none" },
        author: { marginRight: "auto" },
        time: { color: "#6c757d" },
        close: {
            cursor: "pointer",
            border: "0",
            cssFloat: "right",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#000",
            textShadow: "0 1px 0 #fff",
            opacity: 0.5,
            background: "transparent"
        },
        message: {
            margin: "10px",
            padding: '4px',
            marginLeft: avatar ? "45px" : '0px',
            color: variant === 'dark' ? 'white' : "#6c757d",
            animationName: warning ? 'blink' : 'none',
            animationDuration: "1s",
            animationTimingFunction: "cubic-bezier(.14, .67, .34, .99)",
            animationIterationCount: 'infinite'
        },
        avatar: {
            position: "absolute",
            left: "10px",
            bottom: "8px",
            width: "30px"
        }
    }


    return (

        <div style={notificationStyles.main} onClick={action}>

            <header style={notificationStyles.header}>

                <img style={notificationStyles.image} src={icon} alt={'lol'} />

                <strong style={notificationStyles.author}>
                    {
                        author
                    }
                </strong>

                <small style={notificationStyles.time}>
                    {
                        mins ? `Hace ${mins} minutos` : 'Ahora'
                    }
                </small>

                {
                    closeButton && <button style={notificationStyles.close}>×</button>
                }

            </header>

            {
                avatar && <img style={notificationStyles.avatar} src={avatar} />
            }

            <p style={notificationStyles.message}>
                {
                    message
                }

                <button onClick={() => showMessage('ESTA INFO ES DEL HIJO')}>HAZME CLICK</button>

            </p>


        </div>
    )
}

export default Notification