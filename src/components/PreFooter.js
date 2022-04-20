import React, { Component } from 'react';
import panyartFurryGif from '../assets/img/panyart_furry.gif';

class PreFooter extends Component {
  render() {
    return (
        <section className="container-fluid bg-white py-5 mt-5 mb-5" id="prefooter">
            <div className="row pt-2 align-items-center justify-content-center">
                <div className="col-md-3 text-center text-md-end" id="credits">
                    <img src={panyartFurryGif} className='img-fluid panyart_gif'/>
                </div>
                <div className='col-md-5 ps-5 text-center my-4 text-md-start introduction'>
                    <h3 class="color_third">
                        <strong>
                            Hey, thanks for coming! ♥
                        </strong>
                    </h3>
                    <h5 class="color_third">
                        I'm a full-time furry artist working on refsheets and ilustrations!
                        <br/><br/>
                        Wanna taste some fresh pieces from the art oven?
                    </h5>
                </div>
            </div>
        </section>
    )
  }
}

export default PreFooter;