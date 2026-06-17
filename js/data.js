const architectures = {
    monolith: {
        realCases: ['Etsy', 'Instagram (Early)', 'Stack Overflow'],
        chaos: { btnText: "Fallo BD", affectedNodes: ['core-box', 'node-1-box', 'node-2-box', 'node-3-box'], message: "APAGÓN TOTAL: En un Monolito, si cae la BD, colapsa todo el sistema.", lines: ['conn-1', 'conn-2', 'conn-3'] },
        es: {
            mainTitle: "Arquitectura Monolítica", subtitle: "ANALOGÍA: EL RESTAURANTE DE UN SOLO HOMBRE",
            l1_title: "Estructura Unificada", l1_desc: "Toda la aplicación reside en un único servidor y base de código.",
            l2_title: "Desarrollo Veloz", l2_desc: "Súper rápido de construir al inicio, barato y fácil para un MVP.",
            l3_title: "Un Solo Artefacto", l3_desc: "Ideal para equipos pequeños que necesitan validar rápido en el mercado.",
            r1_title: "Acoplamiento Total", r1_desc: "Si un módulo falla, toda la aplicación sufre un apagón instantáneo.",
            r2_title: "Efecto Embudo", r2_desc: "Si entran demasiados usuarios, el servicio se satura y colapsa.",
            r3_title: "Escalado Difícil", r3_desc: "Para escalar una función, debes duplicar todo el servidor completo.",
            labelChef: "Aplicación Central", labelDb: "Base de Datos", labelUi: "Interfaz (UI)", labelLogic: "Lógica Backend", footerType: "TIPO: ALL-IN-ONE",
            explainTitle: "¿Qué es la Arquitectura Monolítica? 🏢",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagínate que abres un restaurante. Al principio, para ahorrar y ser rápidos, contratas a una sola persona que hace absolutamente todo: toma el pedido, cocina, cobra, limpia las mesas y atiende a los proveedores.</p><p>En el mundo del software, eso es un Monolito. Es un único bloque de código donde todas las funciones de la aplicación están unidas y mezcladas en el mismo lugar.</p><p><strong>Lo bueno:</strong> Es súper rápido de construir al inicio, barato y fácil de probar. Ideal si estás lanzando un nuevo proyecto o un MVP (Producto Mínimo Viable).</p><p><strong>Lo malo:</strong> Si a esa única persona le da gripe o se satura con 50 clientes a la vez, todo el restaurante colapsa y se detiene. En software, si una pequeña función falla, se cae toda la aplicación.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Aplicaciones pequeñas, equipos cortos y proyectos que necesitan salir al mercado ¡ya mismo!</p>`
        },
        pt: {
            mainTitle: "Arquitetura Monolítica", subtitle: "ANALOGIA: O RESTAURANTE DE UM HOMEM SÓ",
            l1_title: "Estrutura Unificada", l1_desc: "Toda a aplicação reside em um único servidor e base de código.",
            l2_title: "Desenvolvimento Rápido", l2_desc: "Super rápido de construir no início, barato e fácil para um MVP.",
            l3_title: "Um Único Artefato", l3_desc: "Ideal para equipes pequenas que precisam validar rápido no mercado.",
            r1_title: "Acoplamento Total", r1_desc: "Se um módulo falha, toda a aplicação sofre uma queda instantânea.",
            r2_title: "Efeito Gargalo", r2_desc: "Se muitos usuários entram, o serviço satura e colapsa.",
            r3_title: "Escalonamento Difícil", r3_desc: "Para escalar uma função, você deve duplicar todo o servidor completo.",
            labelChef: "Aplicação Central", labelDb: "Banco de Dados", labelUi: "Interface (UI)", labelLogic: "Lógica Backend", footerType: "TIPO: ALL-IN-ONE",
            explainTitle: "O que é Arquitetura Monolítica? 🏢",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine que você abre um restaurante. No início, para economizar e ser rápido, você contrata uma única pessoa que faz absolutamente tudo: anota o pedido, cozinha, cobra, limpa as mesas e atende os fornecedores.</p><p>No mundo do software, isso é um Monólito. É um único bloco de código onde todas as funções do aplicativo estão unidas e misturadas no mesmo lugar.</p><p><strong>O bom:</strong> É super rápido de construir no início, barato e fácil de testar. Ideal se você está lançando um novo projeto ou um MVP (Mínimo Produto Viável).</p><p><strong>O ruim:</strong> Se essa única pessoa ficar doente ou ficar sobrecarregada com 50 clientes ao mesmo tempo, todo o restaurante entra em colapso e para. No software, se uma pequena função falhar, o aplicativo inteiro cai.</p><p>🚀 <strong>Quando usar?</strong> Aplicativos pequenos, equipes enxutas e projetos que precisam ir para o mercado agora mesmo!</p>`
        }
    },
    microservices: {
        realCases: ['Netflix', 'Uber', 'Amazon'],
        chaos: { btnText: "Fallo Servicio", affectedNodes: ['node-1-box'], message: "DEGRADACIÓN PARCIAL: Solo cae el Servicio de Pagos, el resto de la app sigue operando.", lines: ['conn-1'] },
        es: {
            mainTitle: "Microservicios", subtitle: "ANALOGÍA: LA PLAZA DE COMIDAS",
            l1_title: "Desacoplamiento", l1_desc: "La aplicación se divide en servicios pequeños e independientes.",
            l2_title: "Escalado Independiente", l2_desc: "Puedes darle más recursos solo al servicio que lo necesita.",
            l3_title: "Libertad Tecnológica", l3_desc: "Cada servicio puede usar lenguajes y bases de datos distintas.",
            r1_title: "Complejidad de Red", r1_desc: "Los servicios se comunican por APIs, añadiendo latencia y posibles fallos.",
            r2_title: "Mantenimiento Difícil", r2_desc: "Rastrear un error a través de múltiples servicios es complejo.",
            r3_title: "Consistencia Eventual", r3_desc: "Mantener los datos sincronizados es un gran reto técnico.",
            labelChef: "API Gateway", labelDb: "Servicio Pagos", labelUi: "Servicio Usuarios", labelLogic: "Servicio Envíos", footerType: "TIPO: DISTRIBUTED",
            explainTitle: "¿Qué son los Microservicios? 🍱",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagina una gran plaza de comidas. En lugar de un restaurante donde una sola persona hace todo, aquí tienes un puesto especializado en sushi, otro solo de tacos y otro de postres. Cada puesto tiene su propio dueño, su propia caja registradora y sus propios cocineros.</p><p>En software, eso son los Microservicios. La aplicación se divide en docenas (o cientos) de pequeños "mini-programas" que hacen una sola cosa muy bien y se comunican entre sí.</p><p><strong>Lo bueno:</strong> Si el puesto de sushi se queda sin arroz (falla un servicio), la gente aún puede comprar tacos. Además, si hay mucha demanda de tacos, puedes contratar 5 cocineros más solo para ese puesto (escalado independiente).</p><p><strong>Lo malo:</strong> Administrar 50 puestos independientes es carísimo y un caos logístico. Tienes que asegurar que todos hablen el mismo idioma para coordinarse.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Empresas gigantes (Netflix, Uber) con equipos enormes y millones de usuarios, donde el escalado extremo es vital.</p>`
        },
        pt: {
            mainTitle: "Microsserviços", subtitle: "ANALOGIA: A PRAÇA DE ALIMENTAÇÃO",
            l1_title: "Desacoplamento", l1_desc: "A aplicação é dividida em pequenos serviços independentes.",
            l2_title: "Escalonamento Independente", l2_desc: "Você pode dar mais recursos apenas ao serviço que precisa.",
            l3_title: "Liberdade Tecnológica", l3_desc: "Cada serviço pode usar diferentes linguagens e bancos de dados.",
            r1_title: "Complexidade de Rede", r1_desc: "Os serviços se comunicam por APIs, adicionando latência.",
            r2_title: "Manutenção Difícil", r2_desc: "Rastrear um erro em vários serviços é uma tarefa complexa.",
            r3_title: "Consistência Eventual", r3_desc: "Manter os dados sincronizados é um grande desafio técnico.",
            labelChef: "API Gateway", labelDb: "Serviço Pagamentos", labelUi: "Serviço Usuários", labelLogic: "Serviço Entregas", footerType: "TIPO: DISTRIBUTED",
            explainTitle: "O que são Microsserviços? 🍱",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine uma grande praça de alimentação. Em vez de um restaurante onde uma única pessoa faz tudo, aqui você tem uma barraca especializada em sushi, outra só de tacos e outra de sobremesas. Cada barraca tem seu próprio dono, caixa e cozinheiros.</p><p>No software, isso são os Microsserviços. O aplicativo é dividido em dezenas de pequenos "mini-programas" que fazem apenas uma coisa muito bem e se comunicam entre si.</p><p><strong>O bom:</strong> Se a barraca de sushi ficar sem arroz (um serviço falha), as pessoas ainda podem comprar tacos. Além disso, se a demanda por tacos for alta, você pode contratar 5 cozinheiros a mais só para aquela barraca.</p><p><strong>O ruim:</strong> Gerenciar 50 barracas independentes é muito caro e um caos logístico. Você deve garantir que todos falem a mesma língua para se coordenarem.</p><p>🚀 <strong>Quando usar?</strong> Empresas gigantes (Netflix, Uber) com equipes enormes e milhões de usuários, onde a escalabilidade extrema é vital.</p>`
        }
    },
    event_driven: {
        realCases: ['LinkedIn', 'Spotify', 'WhatsApp'],
        chaos: { btnText: "Fallo Consumidor", affectedNodes: ['node-2-box'], message: "TOLERANCIA A FALLOS: El Consumidor A cae, pero el Event Broker encola los mensajes.", lines: ['conn-2'] },
        es: {
            mainTitle: "Orientada a Eventos", subtitle: "ANALOGÍA: SISTEMA DE NOTICIAS DE ÚLTIMA HORA",
            l1_title: "Reacción en Tiempo Real", l1_desc: "Los sistemas actúan instantáneamente ante cambios de estado (eventos).",
            l2_title: "Alta Escalabilidad", l2_desc: "Productores y consumidores no se conocen, permitiendo gran flexibilidad.",
            l3_title: "Tolerancia a Fallos", l3_desc: "Si un servicio cae, los eventos se encolan hasta que se recupere.",
            r1_title: "Garantía de Entrega", r1_desc: "Asegurar que un evento se entregue una sola vez es complejo.",
            r2_title: "Flujo Impredecible", r2_desc: "Es difícil rastrear el flujo completo de un proceso de inicio a fin.",
            r3_title: "Gestión de Errores", r3_desc: "Los fallos en cascada pueden ser difíciles de detener y revertir.",
            labelChef: "Event Broker / Kafka", labelDb: "Productor de Eventos", labelUi: "Consumidor A", labelLogic: "Consumidor B", footerType: "TIPO: ASYNCHRONOUS",
            explainTitle: "¿Qué es la Arquitectura Orientada a Eventos? 📰",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagina una agencia de noticias. El reportero no llama a cada ciudadano uno por uno para darle la noticia. Simplemente la publica (produce el evento), y cualquier persona que esté suscrita al periódico o al canal de TV (los consumidores) la lee cuando le llega.</p><p>En software, en lugar de que el "Servicio A" le ordene directamente al "Servicio B" que haga algo, el A simplemente grita al vacío: "¡Ocurrió una venta!". Y cualquier servicio al que le importe esa venta (como inventario o facturación) reacciona.</p><p><strong>Lo bueno:</strong> Es rapidísimo y súper flexible. Si mañana quieres agregar un nuevo servicio de notificaciones por SMS, solo lo conectas para que escuche el mismo "grito" sin tocar al Servicio A.</p><p><strong>Lo malo:</strong> A veces es muy difícil rastrear la historia completa. Si un paquete no llegó, descubrir si el grito se perdió en el aire o el que escuchaba estaba sordo, es un dolor de cabeza.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Sistemas de tiempo real como chats, trading financiero, IoT (Internet de las cosas) o apps como Uber.</p>`
        },
        pt: {
            mainTitle: "Orientada a Eventos", subtitle: "ANALOGIA: SISTEMA DE NOTÍCIAS DE ÚLTIMA HORA",
            l1_title: "Reação em Tempo Real", l1_desc: "Sistemas agem instantaneamente diante de mudanças de estado.",
            l2_title: "Alta Escalabilidade", l2_desc: "Produtores e consumidores não se conhecem, dando grande flexibilidade.",
            l3_title: "Tolerância a Falhas", l3_desc: "Se um serviço cai, os eventos são enfileirados até a recuperação.",
            r1_title: "Garantia de Entrega", r1_desc: "Garantir que um evento seja entregue apenas uma vez é complexo.",
            r2_title: "Fluxo Imprevisível", r2_desc: "É difícil rastrear o fluxo completo de um processo de ponta a ponta.",
            r3_title: "Gestão de Erros", r3_desc: "Falhas em cascata podem ser difíceis de parar e reverter.",
            labelChef: "Event Broker / Kafka", labelDb: "Produtor de Eventos", labelUi: "Consumidor A", labelLogic: "Consumidor B", footerType: "TIPO: ASYNCHRONOUS",
            explainTitle: "O que é Arquitetura Orientada a Eventos? 📰",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine uma agência de notícias. O repórter não liga para cada cidadão um por um para dar a notícia. Ele simplesmente a publica (produz o evento), e qualquer pessoa que assine o jornal a lê quando chega.</p><p>No software, em vez do "Serviço A" ordenar diretamente ao "Serviço B" que faça algo, o A simplesmente grita para o vazio: "Ocorreu uma venda!". E qualquer serviço que se importe com essa venda reage.</p><p><strong>O bom:</strong> É muito rápido e super flexível. Se amanhã você quiser adicionar um serviço de SMS, basta conectá-lo para ouvir o mesmo "grito" sem tocar no Serviço A.</p><p><strong>O ruim:</strong> Às vezes é muito difícil rastrear a história completa. Descobrir onde o processo falhou no meio de tantos "gritos" é uma dor de cabeça.</p><p>🚀 <strong>Quando usar?</strong> Sistemas em tempo real como chats, mercado financeiro, IoT (Internet das coisas) ou aplicativos como Uber.</p>`
        }
    },
    layered: {
        realCases: ['Sistemas Bancarios', 'Wordpress', 'Java EE Apps'],
        chaos: { btnText: "Fallo Capa Negocio", affectedNodes: ['node-2-box', 'node-3-box'], message: "EFECTO CASCADA: Falla la Capa de Negocio y rompe el acceso a los Datos.", lines: ['conn-2', 'conn-3'] },
        es: {
            mainTitle: "Arquitectura por Capas", subtitle: "ANALOGÍA: LA LÍNEA DE ENSAMBLAJE",
            l1_title: "Separación de Intereses", l1_desc: "Se divide en capas de Presentación, Negocio y Datos.",
            l2_title: "Fácil de Entender", l2_desc: "El estándar más común de la industria, ideal para desarrolladores junior.",
            l3_title: "Seguridad Estricta", l3_desc: "Las solicitudes deben pasar por cada capa, permitiendo validaciones robustas.",
            r1_title: "Sumidero de Rendimiento", r1_desc: "Pasar datos simples por muchas capas añade latencia innecesaria.",
            r2_title: "Despliegue Monolítico", r2_desc: "Usualmente se despliega todo junto, limitando la escalabilidad individual.",
            r3_title: "Acoplamiento Rígido", r3_desc: "Un cambio en la base de datos a menudo requiere cambios en todas las capas.",
            labelChef: "Capa de Presentación", labelDb: "Capa de Negocio", labelUi: "Capa de Datos", labelLogic: "Base de Datos", footerType: "TIPO: N-TIER",
            explainTitle: "¿Qué es la Arquitectura por Capas? 🏢",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Piensa en un pastel o en una gran corporación tradicional. El cliente solo habla con la Recepcionista (Capa de Presentación). La Recepcionista le pasa el pedido al Gerente (Capa de Negocio) y el Gerente va al Archivo (Capa de Datos) a buscar el expediente.</p><p><strong>Lo bueno:</strong> Todo es súper ordenado. Si cambias a la recepcionista, el archivo sigue intacto. Es fácil de entender porque la mayoría de las empresas humanas funcionan así.</p><p><strong>Lo malo:</strong> Burocracia pura. Si el cliente solo quiere cambiar su número de teléfono, la petición igual tiene que pasar obligatoriamente por la recepcionista, luego al gerente y luego al archivo, haciendo el proceso más lento de lo necesario.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Aplicaciones corporativas estándar, sistemas administrativos y equipos junior que necesitan reglas claras y tradicionales.</p>`
        },
        pt: {
            mainTitle: "Arquitetura em Camadas", subtitle: "ANALOGIA: A LINHA DE MONTAGEM",
            l1_title: "Separação de Preocupações", l1_desc: "Dividida em camadas de Apresentação, Negócios e Dados.",
            l2_title: "Fácil de Entender", l2_desc: "O padrão mais comum, ideal para novos desenvolvedores.",
            l3_title: "Segurança Rigorosa", l3_desc: "Requisições passam por cada camada, permitindo validações.",
            r1_title: "Queda de Desempenho", r1_desc: "Passar dados simples por várias camadas adiciona latência inútil.",
            r2_title: "Implantação Monolítica", r2_desc: "Geralmente é implantada inteira, limitando a escalabilidade.",
            r3_title: "Acoplamento Rígido", r3_desc: "Uma mudança no banco frequentemente exige mudanças em todas as camadas.",
            labelChef: "Camada Apresentação", labelDb: "Camada Negócios", labelUi: "Camada de Dados", labelLogic: "Banco de Dados", footerType: "TIPO: N-TIER",
            explainTitle: "O que é Arquitetura em Camadas? 🏢",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Pense em um bolo ou em uma corporação tradicional. O cliente só fala com a Recepcionista (Camada de Apresentação). A Recepcionista repassa o pedido ao Gerente (Camada de Negócios) e o Gerente vai ao Arquivo (Camada de Dados) buscar a pasta.</p><p><strong>O bom:</strong> Tudo é super organizado. Se você mudar a recepcionista, o arquivo permanece intacto. É fácil de entender porque a maioria das empresas humanas funciona assim.</p><p><strong>O ruim:</strong> Burocracia pura. Se o cliente quer apenas alterar seu número de telefone, o pedido ainda tem que passar pela recepcionista, gerente e arquivo, tornando o processo lento.</p><p>🚀 <strong>Quando usar?</strong> Aplicativos corporativos padrão, sistemas administrativos e equipes júnior que precisam de regras claras.</p>`
        }
    },
    hexagonal: {
        realCases: ['Netflix (Core)', 'Patreon', 'Modern DDD Apps'],
        chaos: { btnText: "Fallo Adaptador", affectedNodes: ['node-1-box'], message: "AISLAMIENTO: Falla el adaptador de BD, pero la lógica de dominio (Core) sigue intacta.", lines: ['conn-1'] },
        es: {
            mainTitle: "Arquitectura Hexagonal", subtitle: "ANALOGÍA: EL NÚCLEO AISLADO",
            l1_title: "Aislamiento Total", l1_desc: "El dominio del negocio está en el centro, aislado de la base de datos y UI.",
            l2_title: "Intercambiable", l2_desc: "Puedes cambiar la BD o la API sin tocar una sola línea de la lógica de negocio.",
            l3_title: "Altamente Testeable", l3_desc: "Al usar puertos y adaptadores, las pruebas unitarias son muy fáciles de hacer.",
            r1_title: "Curva de Aprendizaje", r1_desc: "Requiere un alto conocimiento de diseño de software para implementarse bien.",
            r2_title: "Sobreingeniería", r2_desc: "Puede ser excesivo y costoso para proyectos simples o MVPs.",
            r3_title: "Mucha Abstracción", r3_desc: "Crear tantas interfaces (puertos) puede llevar a código verboso.",
            labelChef: "Dominio (Núcleo)", labelDb: "Adaptador BD", labelUi: "Adaptador Web", labelLogic: "Puerto (Interface)", footerType: "TIPO: PORTS & ADAPTERS",
            explainTitle: "¿Qué es la Arquitectura Hexagonal? 🎮",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagina una consola de videojuegos como la Nintendo Switch. El "cerebro" (el juego) está en el centro. A ese centro le da igual si lo juegas en la TV de la sala, en la pantalla portátil, o si usas el mando Pro o los Joy-Cons. Simplemente usas "Puertos" para conectar lo que quieras.</p><p><strong>Lo bueno:</strong> Tu código de negocio (las reglas de tu app) está blindado en el centro. Puedes cambiar la base de datos de Oracle a MySQL o cambiar la web a una App móvil, y el "corazón" de la aplicación ni se entera. No hay que reescribir nada del núcleo.</p><p><strong>Lo malo:</strong> Crear todos esos "puertos y adaptadores" (los enchufes universales) toma bastante tiempo extra. Para un proyecto pequeño, es demasiada ingeniería.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Sistemas bancarios, plataformas Core que vivirán por 10 años y necesitan sobrevivir a los cambios de tecnología.</p>`
        },
        pt: {
            mainTitle: "Arquitetura Hexagonal", subtitle: "ANALOGIA: O NÚCLEO ISOLADO",
            l1_title: "Isolamento Total", l1_desc: "O domínio do negócio fica no centro, isolado do banco de dados e UI.",
            l2_title: "Intercambiável", l2_desc: "Mude o banco ou a API sem tocar na lógica de negócios.",
            l3_title: "Altamente Testável", l3_desc: "O uso de portas e adaptadores torna os testes unitários muito fáceis.",
            r1_title: "Curva de Aprendizado", r1_desc: "Requer alto conhecimento de design de software para ser bem feito.",
            r2_title: "Overengineering", r2_desc: "Pode ser excessivo e caro para projetos simples ou MVPs.",
            r3_title: "Muita Abstração", r3_desc: "Criar tantas interfaces (portas) pode resultar em código verboso.",
            labelChef: "Domínio (Núcleo)", labelDb: "Adaptador BD", labelUi: "Adaptador Web", labelLogic: "Porta (Interface)", footerType: "TIPO: PORTS & ADAPTERS",
            explainTitle: "O que é Arquitetura Hexagonal? 🎮",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine um console de videogame como o Nintendo Switch. O "cérebro" (o jogo) está no centro. Para o centro, não importa se você joga na TV, na tela portátil ou se usa o controle Pro. Você simplesmente usa "Portas" para conectar o que quiser.</p><p><strong>O bom:</strong> O código de negócios (regras do app) fica blindado no centro. Você pode trocar o banco de dados ou mudar a web para um App móvel, e o "coração" nem percebe. Não precisa reescrever o núcleo.</p><p><strong>O ruim:</strong> Criar todas essas "portas e adaptadores" (tomadas universais) leva muito tempo. Para um projeto pequeno, é muita engenharia.</p><p>🚀 <strong>Quando usar?</strong> Sistemas bancários e plataformas Core que durarão 10 anos e precisam sobreviver a mudanças tecnológicas.</p>`
        }
    },
    serverless: {
        realCases: ['Coca-Cola', 'Figma', 'Bustle'],
        chaos: { btnText: "Fallo Gateway", affectedNodes: ['node-2-box'], message: "VENDOR LOCK-IN: Falla el API Gateway de tu nube y ninguna función se puede ejecutar.", lines: ['conn-2'] },
        es: {
            mainTitle: "Arquitectura Serverless", subtitle: "ANALOGÍA: LA COCINA FANTASMA",
            l1_title: "Sin Gestión de Servidor", l1_desc: "El proveedor cloud maneja toda la infraestructura. Tú solo escribes código.",
            l2_title: "Costo por Uso", l2_desc: "Solo pagas por el tiempo de ejecución exacto de tus funciones.",
            l3_title: "Escalado Automático", l3_desc: "Escala desde cero hasta miles de peticiones al instante sin tu intervención.",
            r1_title: "Vendor Lock-in", r1_desc: "Te atas fuertemente a AWS, Google Cloud o Azure y sus ecosistemas.",
            r2_title: "Cold Starts", r2_desc: "El primer usuario que invoca la función tras un tiempo inactiva sufrirá retraso.",
            r3_title: "Debugging Complejo", r3_desc: "Reproducir entornos serverless localmente para depurar es un dolor de cabeza.",
            labelChef: "Cloud Provider", labelDb: "Cloud Functions", labelUi: "API Gateway", labelLogic: "Cloud Storage", footerType: "TIPO: FaaS",
            explainTitle: "¿Qué es Serverless (Sin Servidor)? 👻",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>En vez de comprar o alquilar un restaurante y pagar luz, agua y empleados todos los meses (tengas clientes o no), contratas a una "Cocina Fantasma". Ellos cocinan solo cuando entra un pedido por UberEats, y tú pagas exactamente por los milisegundos que tomó cocinar ese plato. Cero costos fijos.</p><p><strong>Lo bueno:</strong> Si tu app se vuelve viral y pasas de 10 usuarios a 1 millón, la "cocina mágica de Amazon/Google" pone mil cocineros de forma automática. Y si no entra nadie en todo el mes, pagas $0.00.</p><p><strong>Lo malo:</strong> Estás completamente amarrado a las reglas y tarifas de esa "Cocina" (Vendor Lock-in). Además, el primer plato del día puede tardar un poco más en salir porque tienen que encender las estufas ("Cold Start").</p><p>🚀 <strong>¿Cuándo usarla?</strong> Startups, aplicaciones con tráfico muy impredecible y procesos automáticos asíncronos.</p>`
        },
        pt: {
            mainTitle: "Arquitetura Serverless", subtitle: "ANALOGIA: A COZINHA FANTASMA",
            l1_title: "Sem Gestão de Servidor", l1_desc: "O provedor cloud gerencia a infraestrutura. Você só escreve código.",
            l2_title: "Custo por Uso", l2_desc: "Você paga apenas pelo tempo de execução exato das suas funções.",
            l3_title: "Escalonamento Auto", l3_desc: "Escala de zero a milhares de requisições instantaneamente.",
            r1_title: "Vendor Lock-in", r1_desc: "Você fica fortemente preso à AWS, Google Cloud ou Azure.",
            r2_title: "Cold Starts", r2_desc: "O primeiro usuário após um período inativo sofrerá lentidão.",
            r3_title: "Debugging Complexo", r3_desc: "Reproduzir ambientes serverless localmente para depurar é muito difícil.",
            labelChef: "Cloud Provider", labelDb: "Cloud Functions", labelUi: "API Gateway", labelLogic: "Cloud Storage", footerType: "TIPO: FaaS",
            explainTitle: "O que é Serverless (Sem Servidor)? 👻",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Em vez de alugar um restaurante e pagar luz, água e funcionários todo mês (tendo clientes ou não), você contrata uma "Cozinha Fantasma". Eles cozinham apenas quando chega um pedido, e você paga exatamente pelos milissegundos que levou para cozinhar aquele prato. Zero custos fixos.</p><p><strong>O bom:</strong> Se o seu app viralizar e passar de 10 para 1 milhão de usuários, a "cozinha mágica da Amazon/Google" coloca mil cozinheiros automaticamente. E se ninguém entrar o mês todo, você paga $0.00.</p><p><strong>O ruim:</strong> Você fica completamente amarrado às regras e tarifas dessa "Cozinha" (Vendor Lock-in). Além disso, o primeiro prato do dia pode demorar porque têm que ligar o fogão ("Cold Start").</p><p>🚀 <strong>Quando usar?</strong> Startups, aplicativos com tráfego muito imprevisível e processos automáticos assíncronos.</p>`
        }
    },
    microkernel: {
        realCases: ['VS Code', 'Eclipse', 'Jira'],
        chaos: { btnText: "Fallo Plugin", affectedNodes: ['node-2-box'], message: "EXTENSIBILIDAD: Falla un Plugin, pero el Core del sistema sigue vivo y operando.", lines: ['conn-2'] },
        es: {
            mainTitle: "Arquitectura Microkernel", subtitle: "ANALOGÍA: NAVEGADOR Y EXTENSIONES",
            l1_title: "Núcleo Minimalista", l1_desc: "El core contiene solo las funciones críticas y esenciales para que el sistema opere.",
            l2_title: "Extensibilidad", l2_desc: "Nuevas funcionalidades se añaden como plugins sin alterar el núcleo.",
            l3_title: "Estabilidad", l3_desc: "Si un plugin falla, el núcleo del sistema sigue funcionando sin problemas.",
            r1_title: "Rendimiento Limitado", r1_desc: "La comunicación entre el núcleo y los plugins puede causar cuellos de botella.",
            r2_title: "Complejidad del API", r2_desc: "Diseñar un contrato (API) robusto para los plugins es extremadamente difícil.",
            r3_title: "Dependencias de Versión", r3_desc: "Actualizar el núcleo puede romper plugins de terceros fácilmente.",
            labelChef: "Core System", labelDb: "Plugin Registry", labelUi: "Plugin A", labelLogic: "Plugin B", footerType: "TIPO: PLUG-IN",
            explainTitle: "¿Qué es la Arquitectura Microkernel? 🧩",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Piensa en un enchufe múltiple o en tu navegador web (Chrome). Por sí solo, Chrome solo sirve para entrar a internet (ese es el "Núcleo"). Pero le instalas un bloqueador de anuncios, un corrector de ortografía o un traductor. Esos son los "Plugins".</p><p><strong>Lo bueno:</strong> Tu sistema principal es pequeñito, rápido y casi nunca se rompe. Toda la magia y personalización sucede gracias a los plugins que se conectan alrededor. Si un plugin es defectuoso, lo desinstalas y el navegador sigue funcionando perfecto.</p><p><strong>Lo malo:</strong> Tienes que diseñar unas reglas (API) perfectas de cómo los plugins se pueden conectar al núcleo. Si cambias la forma del "enchufe" central en el futuro, todos los plugins del mundo dejarán de funcionar.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Software de escritorio, IDEs (VS Code, Eclipse), motores de videojuegos o sistemas donde terceros van a crear extensiones.</p>`
        },
        pt: {
            mainTitle: "Arquitetura Microkernel", subtitle: "ANALOGIA: NAVEGADOR E EXTENSÕES",
            l1_title: "Núcleo Minimalista", l1_desc: "O core contém apenas as funções essenciais para operar.",
            l2_title: "Extensibilidade", l2_desc: "Novas funcionalidades são adicionadas como plugins sem alterar o núcleo.",
            l3_title: "Estabilidade", l3_desc: "Se um plugin falhar, o núcleo do sistema continua funcionando.",
            r1_title: "Desempenho Limitado", r1_desc: "A comunicação entre o núcleo e os plugins pode causar gargalos.",
            r2_title: "Complexidade da API", r2_desc: "Projetar um contrato (API) robusto para plugins é muito difícil.",
            r3_title: "Dependências de Versão", r3_desc: "Atualizar o núcleo pode quebrar plugins de terceiros facilmente.",
            labelChef: "Core System", labelDb: "Plugin Registry", labelUi: "Plugin A", labelLogic: "Plugin B", footerType: "TIPO: PLUG-IN",
            explainTitle: "O que é a Arquitetura Microkernel? 🧩",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Pense no seu navegador de internet (Chrome). Por si só, o Chrome serve apenas para entrar na internet (esse é o "Núcleo"). Mas você instala um bloqueador de anúncios, corretor ortográfico, etc. Esses são os "Plugins".</p><p><strong>O bom:</strong> Seu sistema principal é pequeno, rápido e quase nunca quebra. Toda a magia e personalização acontecem graças aos plugins. Se um plugin der defeito, você o remove e o navegador continua perfeito.</p><p><strong>O ruim:</strong> Você deve projetar regras (API) perfeitas de como os plugins se conectam ao núcleo. Se mudar a forma da "tomada" central no futuro, todos os plugins deixarão de funcionar.</p><p>🚀 <strong>Quando usar?</strong> Software de desktop, IDEs (VS Code), motores de jogos ou sistemas onde terceiros criarão extensões.</p>`
        }
    },
    soa: {
        realCases: ['Salesforce', 'PayPal (Legacy)', 'Enterprise SAP'],
        chaos: { btnText: "Caída de ESB", affectedNodes: ['core-box', 'node-1-box', 'node-2-box', 'node-3-box'], message: "SINGLE POINT OF FAILURE: Si cae el Bus de Servicios (ESB), colapsa toda la empresa.", lines: ['conn-1', 'conn-2', 'conn-3'] },
        es: {
            mainTitle: "SOA (Orientada a Servicios)", subtitle: "ANALOGÍA: DEPARTAMENTO CORPORATIVO",
            l1_title: "Reutilización", l1_desc: "Los servicios se diseñan para ser reutilizados por múltiples aplicaciones.",
            l2_title: "Integración Enterprise", l2_desc: "Ideal para conectar sistemas monolíticos antiguos (legacy) entre sí.",
            l3_title: "Gobernanza Fuerte", l3_desc: "Políticas estrictas aseguran consistencia a nivel empresarial.",
            r1_title: "ESB como Cuello de Botella", r1_desc: "El Bus de Servicios Empresarial (ESB) suele ser un punto único de fallo.",
            r2_title: "Muy Pesado", r2_desc: "Usa protocolos verbosos como SOAP/XML, haciéndolo lento y complejo.",
            r3_title: "Costos Elevados", r3_desc: "Requiere gran inversión en infraestructura y middleware corporativo.",
            labelChef: "ESB (Service Bus)", labelDb: "Legacy System", labelUi: "Servicio Web", labelLogic: "Gobernanza", footerType: "TIPO: ENTERPRISE",
            explainTitle: "¿Qué es SOA (Orientada a Servicios)? 🏢💼",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagina una mega corporación o un gobierno estatal. Para que la Secretaría de Salud y el Ministerio de Educación hablen entre sí, deben pasar todos sus documentos oficiales por un "Buzón Central de Correos" (el famoso ESB - Enterprise Service Bus) que traduce el formato de un ministerio al del otro.</p><p><strong>Lo bueno:</strong> Permite que sistemas prehistóricos (legacy) escritos hace 30 años en los bancos, puedan comunicarse con sistemas modernos web, todo reutilizando la misma "lógica corporativa".</p><p><strong>Lo malo:</strong> Es lentísimo. El "Buzón Central" hace traducciones tan complejas (XML/SOAP) que se convierte en un cuello de botella terrible. Hoy en día se considera el abuelo lento de los Microservicios.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Integraciones de corporaciones gigantescas (SAP, Oracle) o bancos que no pueden apagar sus servidores antiguos.</p>`
        },
        pt: {
            mainTitle: "SOA (Orientada a Serviços)", subtitle: "ANALOGIA: DEPARTAMENTO CORPORATIVO",
            l1_title: "Reutilização", l1_desc: "Os serviços são projetados para uso por várias aplicações.",
            l2_title: "Integração Enterprise", l2_desc: "Ideal para conectar sistemas legados antigos entre si.",
            l3_title: "Governança Forte", l3_desc: "Políticas rigorosas garantem consistência em nível empresarial.",
            r1_title: "ESB como Gargalo", r1_desc: "O Barramento de Serviços (ESB) costuma ser um ponto único de falha.",
            r2_title: "Muito Pesado", r2_desc: "Usa protocolos verbosos como SOAP/XML, tornando-se lento e complexo.",
            r3_title: "Custos Elevados", r3_desc: "Requer grande investimento em infraestrutura corporativa.",
            labelChef: "ESB (Service Bus)", labelDb: "Sistema Legado", labelUi: "Serviço Web", labelLogic: "Governança", footerType: "TIPO: ENTERPRISE",
            explainTitle: "O que é SOA (Orientada a Serviços)? 🏢💼",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine uma megacorporação ou governo estadual. Para que a Saúde e a Educação conversem, todos os documentos oficiais passam por uma "Caixa Central de Correios" (o ESB) que traduz o formato de um ministério para o outro.</p><p><strong>O bom:</strong> Permite que sistemas pré-históricos (legacy) de 30 anos atrás possam se comunicar com sistemas modernos web, reutilizando a mesma lógica.</p><p><strong>O ruim:</strong> É muito lento. A "Caixa Central" faz traduções tão complexas (XML/SOAP) que se torna um gargalo terrível. Hoje é considerado o avô lento dos Microsserviços.</p><p>🚀 <strong>Quando usar?</strong> Integrações de corporações gigantescas (SAP, Oracle) ou bancos que não podem desligar servidores antigos.</p>`
        }
    },
    space_based: {
        realCases: ['TurboTax', 'Visa', 'Stock Exchanges'],
        chaos: { btnText: "Fallo Nodo RAM", affectedNodes: ['node-1-box'], message: "ALTA DISPONIBILIDAD: Cae una unidad de procesamiento, pero el Data Grid en RAM replica instantáneamente.", lines: ['conn-1'] },
        es: {
            mainTitle: "Basada en Espacio", subtitle: "ANALOGÍA: RED DE CAJEROS AUTOMÁTICOS",
            l1_title: "Sin Base de Datos Central", l1_desc: "Elimina la base de datos como cuello de botella mediante memoria compartida.",
            l2_title: "Escalado Extremo", l2_desc: "Soporta picos de carga masivos e impredecibles sin degradación.",
            l3_title: "Baja Latencia", l3_desc: "Las transacciones ocurren en memoria RAM, siendo ultra rápidas.",
            r1_title: "Lógica Compleja", r1_desc: "Sincronizar y replicar memoria entre nodos es matemáticamente complejo.",
            r2_title: "Persistencia de Datos", r2_desc: "Guardar los datos en disco sin afectar el rendimiento es un reto mayor.",
            r3_title: "Casos de Uso Limitados", r3_desc: "Solo útil para sistemas de pujas, trading financiero o venta de tickets masiva.",
            labelChef: "Middleware (Space)", labelDb: "Processing Unit 1", labelUi: "Processing Unit 2", labelLogic: "Data Grid", footerType: "TIPO: IN-MEMORY",
            explainTitle: "¿Qué es la Arquitectura Basada en Espacio? 🚀",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagina una venta de entradas para la final de la Copa del Mundo. Si todos van a la misma ventanilla (Base de Datos), se hace un embudo y colapsa. ¿La solución? Le damos una libreta (Memoria RAM) a 1,000 vendedores en la calle. Venden en segundos y, por arte de magia (Data Grid), las libretas de todos se sincronizan en el aire al instante.</p><p><strong>Lo bueno:</strong> Rendimiento extremo. Elimina por completo el mayor problema del software: que la base de datos es lenta. Aquí casi todo sucede en memoria RAM ultra rápida.</p><p><strong>Lo malo:</strong> Es carísimo mantener tanta RAM en los servidores, y matemáticamente súper complejo asegurar que si un vendedor se desmaya (falla un nodo), su libreta no se pierda antes de sincronizarse.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Black Friday, Ticketmaster, procesadores de tarjetas de crédito o plataformas de trading en bolsa.</p>`
        },
        pt: {
            mainTitle: "Baseada em Espaço", subtitle: "ANALOGIA: REDE DE CAIXAS ELETRÔNICOS",
            l1_title: "Sem Banco Central", l1_desc: "Elimina o banco de dados como gargalo através da memória compartilhada.",
            l2_title: "Escalonamento Extremo", l2_desc: "Suporta picos de carga massivos sem degradação.",
            l3_title: "Baixa Latência", l3_desc: "Transações ocorrem na memória RAM, sendo ultrarrápidas.",
            r1_title: "Lógica Complexa", r1_desc: "Sincronizar e replicar memória entre nós é muito complexo.",
            r2_title: "Persistência de Dados", r2_desc: "Salvar dados em disco sem afetar o desempenho é um desafio.",
            r3_title: "Uso Limitado", r3_desc: "Útil apenas para lances, mercado financeiro ou venda massiva de ingressos.",
            labelChef: "Middleware (Space)", labelDb: "Processing Unit 1", labelUi: "Processing Unit 2", labelLogic: "Data Grid", footerType: "TIPO: IN-MEMORY",
            explainTitle: "O que é a Arquitetura Baseada em Espaço? 🚀",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine a venda de ingressos para a Copa do Mundo. Se todos vão ao mesmo guichê (Banco de Dados), há um gargalo e ele colapsa. A solução? Damos um caderno (Memória RAM) para 1.000 vendedores na rua. Eles vendem em segundos e os cadernos sincronizam pelo ar (Data Grid).</p><p><strong>O bom:</strong> Desempenho extremo. Elimina o maior problema do software: a lentidão do banco de dados. Quase tudo acontece na memória RAM ultrarrápida.</p><p><strong>O ruim:</strong> É muito caro manter tanta RAM, e muito complexo garantir que se um vendedor desmaiar, as informações de seu caderno não sejam perdidas.</p><p>🚀 <strong>Quando usar?</strong> Black Friday, Ticketmaster, processadores de cartões de crédito ou plataformas de trading.</p>`
        }
    },
    p2p: {
        realCases: ['BitTorrent', 'Bitcoin', 'Skype (Legacy)'],
        chaos: { btnText: "Caída Masiva de Nodos", affectedNodes: ['node-1-box', 'node-2-box'], message: "RESISTENCIA ORGÁNICA: Caen múltiples pares, pero la red P2P sigue viva gracias al resto.", lines: ['conn-1', 'conn-2'] },
        es: {
            mainTitle: "Peer-to-Peer (P2P)", subtitle: "ANALOGÍA: COMPARTICIÓN POR TORRENT",
            l1_title: "Descentralización", l1_desc: "Cada nodo es cliente y servidor al mismo tiempo. No hay un jefe central.",
            l2_title: "Resistencia a la Censura", l2_desc: "Es casi imposible de tumbar, ya que no hay un servidor central que atacar.",
            l3_title: "Escala Orgánica", l3_desc: "El sistema se vuelve más fuerte y rápido cuantos más usuarios se unen.",
            r1_title: "Seguridad y Confianza", r1_desc: "Difícil validar la integridad y la seguridad si un nodo es malicioso.",
            r2_title: "Consistencia Débil", r2_desc: "No hay garantía de que todos los nodos tengan la información más reciente.",
            r3_title: "Rendimiento Variable", r3_desc: "Depende del ancho de banda y disponibilidad de los usuarios (pares).",
            labelChef: "Red Descentralizada", labelDb: "Nodo Par A", labelUi: "Nodo Par B", labelLogic: "Nodo Par C", footerType: "TIPO: DECENTRALIZED",
            explainTitle: "¿Qué es Peer-to-Peer (P2P)? 🤝",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagina un grupo de estudio en la escuela. No hay profesor (Servidor Central). Todos los alumnos (Nodos/Pares) comparten sus apuntes directamente unos con otros. Si un alumno tiene una página del libro, le saca fotocopia y se la da a sus compañeros.</p><p><strong>Lo bueno:</strong> Es in-tumbable. Para destruir el grupo de estudio tendrías que expulsar a todos los alumnos uno por uno. Mientras más gente se une, más archivos se comparten y más rápida se vuelve la red.</p><p><strong>Lo malo:</strong> Como no hay profesor, no hay autoridad. Alguien podría entregar "apuntes falsos" (archivos con virus) y la red los compartiría. Garantizar la seguridad y el orden sin un líder es un desafío brutal.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Criptomonedas (Blockchain), redes de torrent, intercambio de archivos y sistemas resistentes a la censura de gobiernos.</p>`
        },
        pt: {
            mainTitle: "Peer-to-Peer (P2P)", subtitle: "ANALOGIA: COMPARTILHAMENTO POR TORRENT",
            l1_title: "Descentralização", l1_desc: "Cada nó é cliente e servidor ao mesmo tempo. Não há chefe central.",
            l2_title: "Resistência à Censura", l2_desc: "Quase impossível derrubar, pois não há servidor central para atacar.",
            l3_title: "Escala Orgânica", l3_desc: "O sistema fica mais forte e rápido quanto mais usuários entram.",
            r1_title: "Segurança e Confiança", r1_desc: "Difícil validar a integridade se um nó for malicioso.",
            r2_title: "Consistência Fraca", r2_desc: "Não há garantia de que todos os nós tenham a informação atualizada.",
            r3_title: "Desempenho Variável", r3_desc: "Depende da largura de banda e disponibilidade dos usuários (pares).",
            labelChef: "Rede Descentralizada", labelDb: "Nó Par A", labelUi: "Nó Par B", labelLogic: "Nó Par C", footerType: "TIPO: DECENTRALIZED",
            explainTitle: "O que é Peer-to-Peer (P2P)? 🤝",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine um grupo de estudo na escola. Não há professor (Servidor Central). Todos os alunos (Nós) compartilham anotações diretamente uns com os outros. Se um tem uma página, tira xerox e dá aos colegas.</p><p><strong>O bom:</strong> É impossível de derrubar. Para destruir a rede, você teria que desconectar todos os alunos um por um. Quanto mais gente entra, mais rápida a rede fica.</p><p><strong>O ruim:</strong> Sem professor, não há autoridade. Alguém pode entregar "anotações falsas" (arquivos com vírus). Garantir a segurança sem um líder é um desafio brutal.</p><p>🚀 <strong>Quando usar?</strong> Criptomoedas (Blockchain), redes torrent, e sistemas resistentes à censura de governos.</p>`
        }
    },
    master_slave: {
        realCases: ['MySQL Clusters', 'Redis Replicas', 'MongoDB'],
        chaos: { btnText: "Fallo Nodo Maestro", affectedNodes: ['core-box', 'node-3-box'], message: "IMPACTO CRÍTICO: Cae el Maestro (Escritura). Los esclavos pueden leer, pero el sistema no puede registrar nada nuevo.", lines: ['conn-1', 'conn-2', 'conn-3'] },
        es: {
            mainTitle: "Maestro-Esclavo", subtitle: "ANALOGÍA: DIRECTOR Y ORQUESTA",
            l1_title: "Lecturas Veloces", l1_desc: "El Maestro escribe, y los Esclavos solo leen. Ideal para sistemas de mucha lectura.",
            l2_title: "Alta Disponibilidad", l2_desc: "Si un esclavo cae, otro toma su lugar sin que el usuario lo note.",
            l3_title: "Respaldos Fáciles", l3_desc: "Puedes hacer backups desde un esclavo sin impactar el rendimiento principal.",
            r1_title: "Cuello de Botella (Escritura)", r1_desc: "Todas las escrituras van al Maestro. Si hay demasiadas, el sistema sufre.",
            r2_title: "Desfase de Datos", r2_desc: "Toma tiempo para que el Maestro sincronice sus datos a los Esclavos.",
            r3_title: "Fallo del Maestro", r3_desc: "Si el Maestro cae, promover un Esclavo a Maestro es una operación delicada.",
            labelChef: "Nodo Maestro (Write)", labelDb: "Esclavo (Read 1)", labelUi: "Esclavo (Read 2)", labelLogic: "Sync Log", footerType: "TIPO: REPLICATION",
            explainTitle: "¿Qué es Maestro-Esclavo? 👨‍🏫",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Piensa en un noticiero. El Presentador Principal (Maestro) es el único que genera las noticias y escribe el guion. Hay 5 presentadores secundarios (Esclavos) que no pueden inventar noticias, solo leen en voz alta la copia del guion que les pasó el Maestro.</p><p><strong>Lo bueno:</strong> Si un millón de personas quieren leer las noticias, los 5 secundarios se encargan de contarlas. Esto libera al Maestro para que siga concentrado en escribir (Rendimiento masivo de lectura).</p><p><strong>Lo malo:</strong> Si el Maestro se atraganta (falla), los secundarios solo pueden repetir las noticias viejas, pero el mundo se queda sin nuevas noticias hasta que uno de los secundarios asuma el puesto de jefe.</p><p>🚀 <strong>¿Cuándo usarla?</strong> Bases de datos (MySQL, PostgreSQL) donde hay muchísimas lecturas de usuarios, pero pocas escrituras simultáneas.</p>`
        },
        pt: {
            mainTitle: "Mestre-Escravo", subtitle: "ANALOGIA: DIRETOR E ORQUESTRA",
            l1_title: "Leituras Velozes", l1_desc: "O Mestre escreve, e os Escravos apenas leem. Ideal para muita leitura.",
            l2_title: "Alta Disponibilidade", l2_desc: "Se um escravo cai, outro assume sem que o usuário perceba.",
            l3_title: "Backups Fáceis", l3_desc: "Faça backups de um escravo sem impactar o desempenho do mestre.",
            r1_title: "Gargalo (Escrita)", r1_desc: "Todas as escritas vão para o Mestre. Se houver muitas, o sistema sofre.",
            r2_title: "Atraso de Dados", r2_desc: "Leva tempo para o Mestre sincronizar os dados com os Escravos.",
            r3_title: "Falha do Mestre", r3_desc: "Se o Mestre cai, promover um Escravo a Mestre é uma operação delicada.",
            labelChef: "Nó Mestre (Write)", labelDb: "Escravo (Read 1)", labelUi: "Escravo (Read 2)", labelLogic: "Sync Log", footerType: "TIPO: REPLICATION",
            explainTitle: "O que é Mestre-Escravo? 👨‍🏫",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Pense em um jornal. O Apresentador Principal (Mestre) é o único que escreve as notícias. Há 5 secundários (Escravos) que não podem inventar notícias, apenas leem em voz alta a cópia do Mestre.</p><p><strong>O bom:</strong> Se um milhão de pessoas querem ler as notícias, os secundários dão conta. Isso libera o Mestre para continuar escrevendo (Desempenho massivo de leitura).</p><p><strong>O ruim:</strong> Se o Mestre falhar, os secundários só podem repetir notícias velhas. O mundo fica sem notícias novas até que um escravo seja promovido a chefe.</p><p>🚀 <strong>Quando usar?</strong> Bancos de dados (MySQL, PostgreSQL) com muitas leituras, mas poucas escritas simultâneas.</p>`
        }
    },
    pipe_filter: {
        realCases: ['Unix CLI', 'Apache Camel', 'Video Encoders'],
        chaos: { btnText: "Obstrucción Tubería", affectedNodes: ['node-2-box'], message: "INTERRUPCIÓN DE FLUJO: Falla el Filtro 2. Todo el procesamiento de datos se detiene a la mitad.", lines: ['conn-2'] },
        es: {
            mainTitle: "Tubería y Filtro", subtitle: "ANALOGÍA: PLANTA PURIFICADORA DE AGUA",
            l1_title: "Procesamiento Secuencial", l1_desc: "Los datos fluyen a través de filtros independientes que los transforman paso a paso.",
            l2_title: "Módulos Intercambiables", l2_desc: "Puedes añadir, remover o reorganizar filtros sin romper el flujo principal.",
            l3_title: "Concurrencia Natural", l3_desc: "Múltiples filtros pueden operar en diferentes partes del flujo al mismo tiempo.",
            r1_title: "Estado Compartido", r1_desc: "Es muy difícil manejar procesos que requieren conocer el historial global.",
            r2_title: "Sobrecarga de Datos", r2_desc: "Convertir datos entre el formato que entra y sale en cada filtro toma poder de cómputo.",
            r3_title: "Manejo de Errores", r3_desc: "Si un filtro a mitad de la tubería falla, ¿qué haces con el dato a medias?",
            labelChef: "Flujo de Datos (Pipe)", labelDb: "Filtro 1 (Parse)", labelUi: "Filtro 2 (Transform)", labelLogic: "Filtro 3 (Load)", footerType: "TIPO: DATA-FLOW",
            explainTitle: "¿Qué es Tubería y Filtro (Pipe & Filter)? 🚰",
            explainContent: `<p><strong>(Explicado para que tu abuela lo entienda)</strong></p><p>Imagínate una planta purificadora de agua. El agua sucia entra por el tubo. Pasa por el Filtro 1 (quita las hojas), el tubo la lleva al Filtro 2 (le quita la arena), y el tubo final la lleva al Filtro 3 (le echa cloro). Sale agua limpia.</p><p><strong>Lo bueno:</strong> Es súper fácil de mantener. Si se daña el filtro de arena, lo cambias por otro sin apagar toda la planta. Los filtros no se conocen entre sí, solo reciben agua, hacen lo suyo, y la empujan adelante.</p><p><strong>Lo malo:</strong> No sirve para aplicaciones interactivas (como una red social o una tienda online). Es estrictamente para transformar datos de manera aburrida y secuencial (como un tren de carga).</p><p>🚀 <strong>¿Cuándo usarla?</strong> Compiladores de código, editores de video (añadir filtro, recortar, exportar) y procesamiento masivo de datos por lotes (ETLs).</p>`
        },
        pt: {
            mainTitle: "Pipeline e Filtro", subtitle: "ANALOGIA: ESTAÇÃO DE TRATAMENTO",
            l1_title: "Processamento Sequencial", l1_desc: "Os dados fluem através de filtros independentes que os transformam.",
            l2_title: "Módulos Intercambiáveis", l2_desc: "Você pode adicionar ou remover filtros sem quebrar o fluxo.",
            l3_title: "Concorrência Natural", l3_desc: "Vários filtros podem operar em diferentes partes do fluxo simultaneamente.",
            r1_title: "Estado Compartilhado", r1_desc: "É muito difícil lidar com processos que exigem conhecimento do histórico.",
            r2_title: "Sobrecarga de Dados", r2_desc: "A conversão constante de dados entre filtros exige muito da CPU.",
            r3_title: "Tratamento de Erros", r3_desc: "Se um filtro no meio da tubulação falhar, o que acontece com o dado?",
            labelChef: "Fluxo de Dados (Pipe)", labelDb: "Filtro 1 (Parse)", labelUi: "Filtro 2 (Transform)", labelLogic: "Filtro 3 (Load)", footerType: "TIPO: DATA-FLOW",
            explainTitle: "O que é Pipeline e Filtro? 🚰",
            explainContent: `<p><strong>(Explicado para que qualquer pessoa entenda)</strong></p><p>Imagine uma estação de tratamento de água. A água suja entra pelo tubo. Passa pelo Filtro 1 (tira as folhas), vai para o Filtro 2 (tira a areia), e o tubo final leva ao Filtro 3 (cloro). Sai água limpa.</p><p><strong>O bom:</strong> É fácil de manter. Se o filtro de areia quebrar, você troca sem desligar toda a estação. Os filtros não se conhecem, apenas recebem a água, fazem seu trabalho, e repassam.</p><p><strong>O ruim:</strong> Não serve para aplicativos interativos (como redes sociais ou e-commerce). É estritamente para processar dados de forma sequencial (como um trem de carga).</p><p>🚀 <strong>Quando usar?</strong> Compiladores de código, edição de vídeo ou processamento em lote de dados pesados (ETLs).</p>`
        }
    }
};
