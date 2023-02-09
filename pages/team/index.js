import Member from "../../components/team/Member"

const people = [
    {
      name: 'Whitney Francis',
      role: 'Copywriter',
      imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Whitney Francis',
        role: 'Copywriter',
        imageUrl:
          'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
    // More people...
  ]
export default function team ()

{
    return (
        <>
         <div className="py-32 bg-black">
      <div className="px-6 mx-auto text-center max-w-7xl lg:px-8">
        <div className="max-w-2xl p-3 mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-cream-900 sm:text-4xl">Meet our team</h2>
          <p className="mt-4 text-lg leading-8 text-white-600">
            We’re a dynamic group of individuals who are passionate about what we do.
          </p>
        </div>
        <div className="max-w-2xl p-2 mx-auto">
          <h3 className="text-3xl font-bold tracking-tight text-cream-600 sm:text-3xl">Event Lead</h3>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <>
            <Member 
            person={person}/>
            </>
          ))}
        </ul>
      </div>
    </div>
        </>
    )
}