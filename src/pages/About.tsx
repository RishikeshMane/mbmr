// import React from 'react'
import './About.css'
import './../index.css'
import Button from '../components/Buttons/Button'

export default function About() {
  return (
    <div className='section w-full flex justify-center items-center'>
      <div className=" container  mt-3">
        <div className="impara flex justify-row ">
          <div className="bg">
            <h4 className="heading2">The simple <br />solution for a <br />productive <br />
              day is nothing <br />but to <span>Start it <br />early.</span>
              <Button className='Btn'>Start</Button></h4>
          </div>
          <div className="paras ml-7">
            <h4 className="heading1">We are aware, are you?</h4>
            <p className="para">In today’s fast-paced world, the rat race is not normal. We don't even identify ourselves with the damage we do to ourselves.</p>
            <p className="para">To address this cause and the importance of waking up early is our major agenda.</p>
            <p className="para mt-5">In a way, it does feel like an accomplishment whenever you’re able to get up early. You can get started what you need to do, and hopefully be done early to enjoy the rest of your day.</p>
            <p className="para mt-7">Waking up early is not just a win psychologically in that sense, it’s a win physically as well.</p>
          </div>
        </div>
        <div className="importance">
          <h4 className="heading1 mt-9">Why Mind Blowing Morning?</h4>
          <p className="para">There are several potential benefits you can access after our sessions :</p>
          <p className="para"><strong>1.Increased productivity:</strong> Many successful people credit their early morning routines as a key factor in their productivity. By waking up early, you can have a few hours of uninterrupted time to focus on your work or personal goals.</p>
          <p className="para"><strong
          >2.Better mental health:</strong> Studies have shown that people who wake up early are less likely to suffer from depression and other mental health issues. Early risers tend to have more consistent sleep schedules and better overall sleep quality, which can improve mood and energy levels.</p>
          <p className="para"><strong>3.Improved physical health:</strong> Waking up early can also lead to better physical health. Early morning exercise can help you jump-start your metabolism, burn more calories throughout the day, and reduce stress levels.</p>
          <p className="para"><strong>4.More time for self-care:</strong> When you wake up early, you can also take some time for self-care activities such as meditation, journaling, or reading, which can help reduce stress and improve your overall well-being.</p>
          <p className="para">Overall, waking up early can help you make the most of your day and lead a healthier, more productive life. However, it's important to note that everyone's natural sleep schedule is different, so what works best for one person may not work for another. </p>
          <p className="para mt-10">The Mind Blowing Morning is a personal development practice that involves waking up early to engage in a set of activities designed to start the day with intention and productivity. The purpose of the Mind Blowing Morning is to help individuals achieve their goals, improve their physical and mental health, and cultivate a positive mindset.</p>
          <p className="para">The core idea of the Mind Blowing Morning is that the way you start your day sets the tone for the rest of it. By dedicating time in the morning to activities such as meditation, visualization, exercise, journaling, and reading, you can increase your focus, energy, and motivation throughout the day.</p>
        </div>
        <div className="join">
          <h4 className="heading1 mt-9">Why should your organization invest in wellness Coaching? </h4>
          <p className="para">

            <div>•Increase Employee Productivity</div>
            <div>•Team Building and Communication</div>
            <div>•Better Focused Teams</div>
            <div>•Healthier and Happier Employees</div>
          </p>
        </div>
        <div className="rule">
          <h4 className="heading1 mt-9">The 21/90 Rule</h4>
          <p className="para">It takes 21 days to build a habit, and it takes 90 days to create a permanent lifestyle change.</p>
          <p className="para">Blooming like a flower after 90 days and experiencing the informativeness within your family and organization. Observing the behavioural pattern changes for better well being.</p>
        </div>
        <div className="support">
          <h4 className="heading1 mt-9">We support.</h4>
          <p className="para">This “Mind Blowing Morning” program  support  “The Tann Mann Gaadi” foundation.</p>
          <p className="para">We ensure your donations are being channeled to the organization “The Tann Mann Gaadi”.
          </p>
          <p className="para">We will bring you the most reliable giving options.
          </p>
          <p className="para">Our program is cleared an exhaustive due diligence process covering legal, financial, and implementation aspects.</p>
          <div className=" flex justify-center"><Button className='Btn py-4 px-11'>Get Started</Button></div>
        </div>
        <div className="partners flex items-center justify-center flex-col my-10">
          <h3 style={{ color: "#3c3c3c", fontWeight: "bolder", fontSize: "30px", marginTop: "20px", alignSelf: "center" }}>Our Partners</h3>
          <div className="flex justify-between w-full my-10 ">
            <img src="./src/pages/flpcrt.png" alt="" />
            <img src="./src/pages/amzn.png" alt="" />
            <img src="./src/pages/Nykaa.png" alt="" />
            <img src="./src/pages/meesho.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
