import React from 'react'
import Carousel from './Carousel'

const Navbar = () => {
    return (
        <div className='container'>
            {/* <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#ffc107'}}> */}
            <nav id="navbar-example2" class="navbar px-3 fixed-top" style={{ backgroundColor: '#ffc107' }}>
                <a class="navbar-brand" href="#">ISKCON Shirpur</a>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading1">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading2">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#scrollspyHeading2">Temple</a>
                    </li>
                </ul>
            </nav>
            <Carousel />
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
                <h4 id="scrollspyHeading1">First heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eligendi esse magnam nihil libero, quasi ad? Assumenda atque minima voluptatem maiores quo molestiae illum natus perspiciatis itaque, quisquam corrupti tempore error ut qui libero.</p>
                <h4 id="scrollspyHeading2">Second heading</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores voluptates sint nobis possimus reiciendis. Autem rerum quis aspernatur repudiandae officiis nesciunt, labore mollitia unde ratione odit tempore cum doloremque illo animi. Sit, in doloribus.</p>
                <h4 id="scrollspyHeading3">Third heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non iste, nobis amet pariatur doloremque ducimus, ea ab laboriosam dolorum saepe? Maiores quos dolores ad sit in quidem excepturi? Similique commodi cum sequi reiciendis.</p>
                <h4 id="scrollspyHeading4">Fourth heading</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo non nemo minus quia odio cupiditate, eveniet voluptatem. Corrupti ullam incidunt est praesentium! Placeat voluptates blanditiis delectus, quo commodi ea. Perspiciatis ullam soluta magni accusantium.</p>
                <h4 id="scrollspyHeading5">Fifth heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga aliquid ullam hic temporibus odio dolorem, at error quaerat qui voluptatibus laboriosam. Dicta nisi maxime autem quidem voluptas sunt voluptatem mollitia itaque quam ad.</p>
            </div>
        </div>
    )
}

export default Navbar
