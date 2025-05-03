import UserCard from "./components/UserCards"
import './App.css';

import bhagatsingh from './assets/bhagatsingh.jpg';
import maharanapratap from './assets/maharanapratap.jpeg';
import shivajimaharaj from './assets/shivajimaharaj.jpeg';


function App() {
  return (
    <div className="container">
      <UserCard 
        name="Maharana Pratap" 
        img={maharanapratap} 
        desc={
          <>
            Maharana Pratap (1540–1597) was a valiant Rajput king of Mewar, Rajasthan. Known for his unwavering resistance against the Mughal emperor Akbar, Maharana Pratap showcased extraordinary bravery at the Battle of Haldighati in 1576. His commitment to independence, along with his guerrilla warfare tactics, made him a legendary symbol of Rajput valor and honor.
          </>
        }
        style={{"border-radius":"15px"}}
        
      />
      
      <UserCard 
        name="Bhagat Singh" 
        img={bhagatsingh} 
        desc={
          <>
            Bhagat Singh (1907–1931) was a revolutionary freedom fighter who played a pivotal role in India’s struggle for independence. His fearless patriotism and radical ideology made him a national hero, particularly after his execution at the young age of 23. Bhagat Singh's powerful slogans, such as 
            <span style={{ fontStyle: 'italic', color: '#555' }}> "Inquilab Zindabad" </span> 
            (Long Live the Revolution), and his unwavering sacrifice continue to inspire generations. His legacy is a testament to courage, resistance, and the enduring spirit of freedom.
          </>
        }
        style={{"border-radius":"15px"}}
      />
      
      <UserCard 
        name="Chhatrapati Shivaji Maharaj" 
        img={shivajimaharaj} 
        desc={
          <>
            Chhatrapati Shivaji Maharaj (1630–1680) was the founder of the Maratha Empire in western India. Renowned for his strategic military tactics, strong governance, and pioneering guerrilla warfare, he established a progressive and well-administered kingdom. Shivaji Maharaj’s legacy as a just and courageous leader endures as a source of pride and inspiration in Indian history.
          </>
        }
        style={{"border-radius":"15px"}}
      />
    </div>
  )
}
export default App
