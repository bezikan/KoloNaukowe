import React, { Component } from 'react';


const groups = [
    { id: 1, title: 'JAVA', content: 'Najpopularniejszy jezyk programowania wg indeksu TIOBE. Uzywany przez najwieksze firmy tech. Na naszych spotkanich zajmiemy sie budowaniem strony przy uzyciu Java 8 oraz nowoczesnej technologii Spring Boot. ' , image: 'https://ih1.redbubble.net/image.418233732.0994/flat,800x800,075,f.u1.jpg', color: 'orangered', instructor: 'Barbara Krawczyk' },
    { id: 2, title: 'ASP.NET', content: 'Zbior technologii opartych na frameworku zaprojektowanym przez firme Microsoft. Przeznaczony jest do budowy roznorodnych aplikacji internetowych, a takze aplikacji typu XML Web Services.', image: 'https://robertonovelo.com/rnawp/wp-content/uploads/2016/02/asp_net.png', color: 'palevioletred', instructor: 'Gabriel Kowalski'},
    { id: 3, title: 'Javascript', content: 'Skryptowy jezyk programowania, stworzony przez firme Netscape, najczesciej stosowany na stronach internetowych. Tworca JavaScriptu jest Brendan Eich.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png', color: 'goldenrod', instructor: 'Marek Zakowski'},
    { id: 4, title: 'Golang', content: 'Jezyk programowania opracowany przez pracownikow Google: Roberta Griesemera, Roba Pike oraz Kena Thompsona. Laczy w sobie latwosc pisania aplikacji charakterystyczna dla jezykow dynamicznych(np.Python, Lisp), jak rowniez wydajnosc jezykow kompilowanych.', image: 'https://it-leaders.com.pl/wp-content/uploads/2018/10/goland-maskotka.png', color: 'lightseagreen', instructor: 'Ewa Nowak'},
    { id: 5, title: 'Machine Learning', content: 'Interdyscyplinarna nauka ze szczegolnym uwzglednieniem takich dziedzin jak informatyka, robotyka i statystyka. Glownym celem jest praktyczne zastosowanie dokonan w dziedzinie sztucznej inteligencji do stworzenia automatycznego systemu potrafiacego doskonalic sie przy pomocy zgromadzonego doswiadczenia (czyli danych) i nabywania na tej podstawie nowej wiedzy.', image: 'https://www.enterrasolutions.com/wp-content/uploads/2018/04/shutterstock_755606608-02.png', color: 'lightcoral', instructor: 'Jakub Malinowski' },
    { id: 6, title: 'Robotyka', content: 'Dziedzina wiedzy dzialajaca na styku mechaniki, automatyki, elektroniki, sensoryki, cybernetyki oraz informatyki. Domena robotyki sa rowniez rozwazania nad sztuczna inteligencja, w niektorych srodowiskach robotyka jest wrecz z nia utozsamiana.', image: 'https://www.environmentalsafetyupdate.com/wp-content/uploads/sites/248/2018/05/robot-3310192_1920.jpg', color: 'mediumseagreen', instructor: 'Maria Kowalska' },
];



function Card(props) {
    return (
        <div>
            {props.groups.map((group) =>
                <div class="card" key={group.id} style={{ 'margin': 40 + 'px', display: 'inline-block' }}>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={group.image} style={{ height: 300 + 'px', width: 300 + 'px', border: 'none' }} alt="..." />
                            </div>
                            <div class="flip-card-back" style={{ 'background-color': group.color, 'text-shadow': '1px 1px 4px #000000'}}>
                                <div class="card-body">
                                    <h5 class="card-title">{group.instructor }

                        <div>
                                <h3>{group.title}</h3>
                            </div>
                            
                                    </h5>
                                    <p class="card-text">{group.content}</p>
                        
                                </div>
                                </div>
                        </div></div></div>  
            )}
           </div>
        
        )}



export class Home extends Component {
  displayName = Home.name

  render() {
      return (

          <div >

              
         
              <div style={{
                  'font-family': 'Imprint MT Shadow'
              }}>
              <h3>Drodzy Studenci UG</h3>
              <p>Zapraszamy do zapoznania sie z ponizsza oferta kol naukowych z obszaru IT. <br/>
                      <a href='/addstudent'>Przejdz do strony zapisow</a></p>
              </div>
              <div>
                  <Card groups={groups}/>
              </div>
           </div>
       
        );
    
  }
}




