import React, { useState } from 'react'

function Bottesting() {
   
const [bots , setBots] = useState({
  bots : "",
})

   let name , value;

  const handleChange = (event)=>{
    event.preventDefault();
    name = event.target.name;
    value = event.target.value;
    setBots({...bots, [name] : value})

  }

  const submitChange = ()=>{

  }
  return (
    <div>
      <div className='w-100 text-center p-5 text-white bg-green-700'>
        <span>Bot Testing || Contest ID : hjbdkjva235vjcxsca</span>
      </div>
      <div className="contest-card-container">
        <div>
          <div>Entry Fee</div>
          <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
            49
          </div>
        </div>
        <div>
          <div>Pool Size</div>
          <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
            100000000
          </div>
        </div>
        <div>
          <div>Pool Prize</div>
          <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
            84652326
          </div>
        </div>
        <div>
          <div>Pool Filled</div>
          <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
            1000
          </div>
        </div>
        <div>
          <div>Pool Fill Percentage</div>
          <div className="bg-white text-sm m-2 rounded-md px-2 py-1">
            {parseFloat(
              (1000 * 100) / 100000000     //(contest.pool_filled * 100) / contest.pool_size
            ).toFixed(2)}
          </div>
        </div>
      </div>
      <div className='flex justify-evenly m-2 p-5 rounded-lg' style={{ backgroundColor: "#e2e2e2" }}>
        <div>
          <span>Add Bots</span>
          <div>
          <label htmlFor='bots'>No. of Bots</label>
            <input id='bots' type="number" className='w-50 m-5 p-2 mt-2 border-green-700 rounded-lg' placeholder="No. of Bots" name = "bots"  value={bots.bots} onChange={handleChange}/>
            <label>Total Amount</label>
            <input type="number" className='w-50 m-5 p-2 border-green-700 rounded-lg' placeholder="Amount" name='bots_ammount' value={bots.bots*49} readOnly={true}/>
          </div>
        </div>
        <div>
          <span>Account Info : <span className='text-green-700'>Density.exchange</span></span>
        </div>

      </div>
      <div className='flex justify-end'>
        <button className='mr-3 w-120 bg-green-700 text-white p-2 rounded-lg' onClick={submitChange}>Submit</button>
      </div> 
    </div>
  )
}

export default Bottesting