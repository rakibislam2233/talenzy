import Stories from "@/components/Stories"
import CreatePost from "@/components/CreatePost"
import Post from "@/components/Post"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <Stories />
      <CreatePost />
      
      <Post
        id="1"
        username="GuitarMaster"
        userAvatar="GM"
        timeAgo="2h ago"
        category="Music"
        location="Los Angeles"
        caption="Practicing a new riff inspired by the classics. Specifically tried to channel some Hendrix vibes here with the bending. Let me know what you think! 🔥🎸"
        hashtags={["#TalenzyMusic", "#GuitarSolo", "#Rock", "#MusicianLife"]}
        mediaType="video"
        likes={1245}
        comments={84}
        views={12500}
        originalAudio="Original Audio - GuitarMaster"
      />

      <Post
        id="2"
        username="CreativeAgency"
        userAvatar="CA"
        timeAgo="5h ago"
        category="Design"
        location="Remote"
        caption="Senior Graphic Designer Wanted - We are looking for a talented Senior Graphic Designer to join our team. Experience in branding and social media is a must. Swipe to see the perks! ✨🙌"
        hashtags={["#Hiring", "#Design", "#RemoteWork"]}
        mediaType="image"
        likes={320}
        comments={45}
        originalAudio=""
      />

      <Post
        id="3"
        username="Sarah_S"
        userAvatar="SS"
        timeAgo="1d ago"
        category="Dance"
        location="New York"
        caption="New choreography for my upcoming performance! The energy in this piece is everything 💃✨"
        hashtags={["#Dance", "#Choreography", "#Performance"]}
        mediaType="video"
        likes={2100}
        comments={156}
        views={45000}
        originalAudio="Original Audio - Sarah_S"
      />
    </div>
  )
}

