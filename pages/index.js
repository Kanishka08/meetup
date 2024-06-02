import MeetupList from "../components/meetups/MeetupList";

const Dummy_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some city",
    description: "This is First Meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 45, 1234 India",
    description: "This is Second Meetup!",
  },
];
function HomePage() {
  return <MeetupList meetups={Dummy_MEETUPS} />;
}
export default HomePage;
