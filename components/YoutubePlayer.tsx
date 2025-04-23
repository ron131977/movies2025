// "use client";

// import { useEffect, useRef, useState } from "react";

// interface YoutubePlayerProps {
//   videoId: string;
// }

// declare global {
//   interface Window {
//     YT: any;
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

// export default function YoutubePlayer({ videoId }: YoutubePlayerProps) {
//   const playerRef = useRef<HTMLDivElement>(null);
//   const [apiReady, setApiReady] = useState(false);

//   useEffect(() => {
//     // Load the YouTube IFrame API script if it hasn't been loaded
//     if (!window.YT) {
//       const tag = document.createElement("script");
//       tag.src = "https://www.youtube.com/iframe_api";
//       document.body.appendChild(tag);

//       window.onYouTubeIframeAPIReady = () => {
//         setApiReady(true);
//       };
//     } else {
//       setApiReady(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (apiReady && playerRef.current) {
//       // Clear previous player if exists
//       playerRef.current.innerHTML = "";

//       new window.YT.Player(playerRef.current, {
//         height: "360",
//         width: "640",
//         videoId: videoId,
//         events: {
//           onReady: (event: any) => event.target.playVideo()
//         }
//       });
//     }
//   }, [apiReady, videoId]);

//   return <div ref={playerRef}></div>;
// }

"use client";

import { useEffect, useRef, useState } from "react";

interface YoutubePlayerProps {
  videoId: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YoutubePlayer({ videoId }: YoutubePlayerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<any>(null);
  const [apiReady, setApiReady] = useState(false);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = () => {
        setApiReady(true);
      };
    } else {
      setApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (apiReady && playerRef.current) {
      if (playerInstance.current) {
        playerInstance.current.destroy();
      }

      playerInstance.current = new window.YT.Player(playerRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: videoId, // must be set for loop to work
        },

        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.playVideo();
          },
        },
      });
    }
  }, [apiReady, videoId]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
        overflow: "hidden",
        filter: "contrast(1.2) saturate(1.3) brightness(1.05) hue-rotate(10deg)",
      }}
    >
      <div
        ref={playerRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

// 'use client'

// import { useEffect, useRef, useState } from 'react'

// interface YoutubePlayerProps {
//   videoId: string | null // Allow for null videoId, as we want to conditionally render
// }

// declare global {
//   interface Window {
//     YT: any
//     onYouTubeIframeAPIReady: () => void
//   }
// }

// export default function YoutubePlayer ({ videoId }: YoutubePlayerProps) {
//   const playerRef = useRef<HTMLDivElement>(null)
//   const playerInstance = useRef<any>(null)
//   const [apiReady, setApiReady] = useState(false)

//   useEffect(() => {
//     if (!window.YT) {
//       const tag = document.createElement('script')
//       tag.src = 'https://www.youtube.com/iframe_api'
//       document.body.appendChild(tag)
//       window.onYouTubeIframeAPIReady = () => {
//         setApiReady(true)
//       }
//     } else {
//       setApiReady(true)
//     }
//   }, [])

//   useEffect(() => {
//     if (apiReady && videoId && playerRef.current) {
//       if (playerInstance.current) {
//         playerInstance.current.destroy() // Destroy existing player if any
//       }

//       // Initialize new player instance with the videoId
//       playerInstance.current = new window.YT.Player(playerRef.current, {
//         videoId: videoId,
//         playerVars: {
//           autoplay: 1,
//           mute: 1,
//           controls: 1,
//           modestbranding: 1,
//           rel: 0,
//           loop: 1,
//           playlist: videoId // must be set for loop to work
//         },
//         events: {
//           onReady: (event: any) => {
//             event.target.mute()
//             event.target.playVideo()
//           }
//         }
//       })
//     }
//   }, [apiReady, videoId])

//   // Conditionally render player only if videoId is provided
//   if (!videoId) {
//     return <p>No video available</p> // You can customize this fallback message
//   }

//   return (
//     <div
//       style={{
//         position: 'relative',
//         width: '100%',
//         paddingBottom: '56.25%',
//         overflow: 'hidden',
//         filter: 'contrast(1.2) saturate(1.3) brightness(1.05) hue-rotate(10deg)'
//       }}
//     >
//       <div
//         ref={playerRef}
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%'
//         }}
//       />
//     </div>
//   )
// }
