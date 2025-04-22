// ChamberiArticle.tsx
import { useState } from 'react';
import { Card, CardContent } from '@/components/card';
import { Button } from '@/components/button';

const faqs = [
  {
    question: '¿Por qué llaman a Chamberí “la estación fantasma”?',
    answer:
      'Porque, aunque los trenes pasan por allí, no se detienen, ya que está cerrada al servicio. Durante muchos años estuvo abandonada, oscura y en desuso, lo que le dio un aire misterioso y alimentó leyendas urbanas.',
  },
  {
    question: '¿Qué es Andén 0?',
    answer:
      'Andén 0 es el museo del Metro de Madrid, ubicado en la antigua estación de Chamberí. Es una estación restaurada que muestra cómo era el metro en sus inicios, con elementos originales y exposiciones históricas.',
  },
  {
    question: '¿Por qué se cerró la estación de Chamberí?',
    answer:
      'Se cerró el 21 de mayo de 1966 porque su ubicación en curva hacía imposible adaptarla a los nuevos trenes más largos. Además, estaba demasiado cerca de las estaciones de Iglesia y Bilbao, lo que obligaba a reducir la velocidad de los trenes.',
  },
  {
    question:
      '¿Para qué se usó la estación después de su cierre y antes de convertirse en Andén 0?',
    answer:
      'Durante ese tiempo, la estación fue escenario de leyendas urbanas, grafitis de jóvenes y algunas escenas de películas, como Barrio. Estuvo cerrada al público y sin un uso oficial durante décadas.',
  },
];

const ChamberiArticle = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-5xl font-bold text-center">
        Chamberí, la estación fantasma
      </h1>

      <div className="w-full h-full ">
        <img
          src="/21A3991.jpg"
          alt="Estación de Chamberí"
          className="w-full h-full rounded-2xl bg-gray-200 object-cover "
        />
      </div>

      <p className="text-xl leading-relaxed text-left">
        Quien la ha visto alguna vez, pegado a la ventanilla entre las
        estaciones de Iglesia y Bilbao, se habrá preguntado qué hace una ruinosa
        estación en mitad de la nada de la Línea 1 del metro de Madrid. Quienes
        han cruzado las vías para averiguar qué hay detrás aseguran que es como
        viajar en el tiempo. Cuarenta años después de su clausura, tras 15 meses
        de rehabilitación y 3,8 millones de euros, la estación de Chamberí
        volvió a la vida. No como parada, sino convertida en Andén 0, el museo
        de la historia del Metro de Madrid.
      </p>

      <p className="text-xl leading-relaxed text-left">
        Situada en la esquina entre las calles de Luchana y de Santa Engracia,
        la estación de Chamberí cerró el 21 de mayo de 1966 debido a la
        ampliación de la Línea 1. Por su situación en curva, que hacía
        técnicamente imposible su reforma, y tan próxima a las estaciones de
        Iglesia y Bilbao que obligaba a los trenes a mantener una velocidad muy
        reducida, el Ministerio de Obras Públicas decidió clausurarla.
      </p>

      <p className="text-xl leading-relaxed text-left">
        Desde su cierre, decenas de leyendas urbanas han acompañado a esta
        misteriosa estación. Jóvenes grafiteros han dejado su firma en ella, e
        incluso sirvió de escenario para algunas escenas de la película Barrio.
        El visitante de Andén 0 Chamberí, al que se entra por una espiral de
        escalera que alberga la escalera y el ascensor, se encontrará con las
        taquillas, barreras de acceso e indicadores de la estación original. Su
        rehabilitación consistió en la restauración del interior, suelos, muros,
        bóvedas y carteles, así como la recuperación del mobiliario y de los
        andenes originales. También se conservan los logotipos originales de
        Metro y los anuncios publicitarios en paños de azulejos de productos que
        ya no existen y de comercios ya cerrados. Además, se han incorporado
        pantallas gigantes que proyectan documentales de la época. Mientras, en
        las taquillas, un cartel amarillento informa de unas “rebajas de
        tarifas” y otro ofrece un pase especial para ir a los toros por 0,50
        céntimos.
      </p>

      <video controls className="w-full rounded-2xl shadow-md">
        <source src="/anden0-documental.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mt-6">Preguntas frecuentes</h2>
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <Button
                // variant="ghost"
                className="w-full text-left justify-between font-medium"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? '-' : '+'}</span>
              </Button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-lg text-left p-4">
                  {faq.answer}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChamberiArticle;
