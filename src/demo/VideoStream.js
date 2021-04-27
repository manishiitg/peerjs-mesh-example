import { useEffect, useRef, useState } from "react"
import classnames from "classnames"

const VideoStream = ({ stream, id }) => {
    const videoRef = useRef()
    const [mute, setMute] = useState(true)
    useEffect(() => {
        videoRef.current.srcObject = stream
    }, [])
    useEffect(() => {
        videoRef.current.muted = mute
    }, [mute])
    return (
        <div className={classnames("img-thumbnail m-1 position-relative", { "border-primary": id.indexOf("mine") !== -1 })}>
            <video width="200" style={{ "height": "auto" }} ref={videoRef} playsInline autoPlay muted />

            {!mute &&
                <button
                    className="btn btn-sm btn-outline-danger m-1 position-absolute bottom-0 start-50 translate-middle-x"
                    style={{ "borderRadius": "50%", zIndex: 999 }}
                    onClick={() => setMute(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                        <path fillRule="evenodd" d="M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                    </svg>
                </button>}

            {mute &&
                <button
                    className="btn btn-sm btn-outline-danger m-1 position-absolute bottom-0 start-50 translate-middle-x"
                    style={{ "borderRadius": "50%", zIndex: 999 }}
                    onClick={() => setMute(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mic-mute" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12.734 9.613A4.995 4.995 0 0 0 13 8V7a.5.5 0 0 0-1 0v1c0 .274-.027.54-.08.799l.814.814zm-1.522 1.72A4 4 0 0 1 4 8V7a.5.5 0 0 0-1 0v1a5 5 0 0 0 4.5 4.975V15h-3a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-3v-2.025a4.973 4.973 0 0 0 2.43-.923l-.718-.719zM11 7.88V3a3 3 0 0 0-5.842-.963l.845.845A2 2 0 0 1 10 3v3.879l1 1zM8.738 9.86l.748.748A3 3 0 0 1 5 8V6.121l1 1V8a2 2 0 0 0 2.738 1.86zm4.908 3.494l-12-12 .708-.708 12 12-.708.707z" />
                    </svg>
                </button>}
        </div>
    )
}

export default VideoStream