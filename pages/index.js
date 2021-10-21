import MeetupList from '../components/meetups/MeetupList';
import {useState , useEffect, Fragment} from "react"
import { MongoClient } from "mongodb";
import  Head from 'next/head'

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  // // fetch data from API
  //   setLoadedMeetups(DUMMY_MEETUPS)
  // },[])
    return (
      <Fragment>
        <Head>
          <title>React App</title>
          <meta name="description" content="Great app for find meetup destinations" />
        </Head>
        <MeetupList meetups={props.meetups} />
      </Fragment>
    );


}

export async function getStaticProps() {
  // fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin123@cluster0.ssgvc.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map(meetup => ({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id: meetup._id.toString() 
      })),
    },
    revalidate: 100,
  }
}
export default HomePage;
