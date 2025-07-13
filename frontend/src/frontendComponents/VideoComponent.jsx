const VideoComponent = () => {
    return (
        <video loop autoPlay='true' muted className="myVideo">
            <source src={('../assets/backgroundVideo.mp4')} type="video/mp4" />
        </video>
    );
}

export default VideoComponent;