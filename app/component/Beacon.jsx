import "../../public/styles/beacon-style.css"

const Beacon = () => {
  return (
    <div style={{padding:"0"}}>
      <div class="container">
        <span class="sun sunshine"></span>
        <span class="sun" style={{ cursor: 'pointer' }}></span>
      </div>
    </div>
  )
}

export default Beacon