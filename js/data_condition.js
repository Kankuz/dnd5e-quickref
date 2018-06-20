data_condition = [
    {
        title: "Cego",
        icon: "one-eyed",
        subtitle: "Você não consegue enxergar",
        description: "Você não consegue enxergar",
        reference: "PHB, pg. 290.",
        bullets: [
            "Você falha automaticamente qualquer teste de atributo que dependa da visão.",
            "Você tem desvantagem em ataques.",
            "Ataques contra você tem vantagem."
        ]
    },
    {
        title: "Enfeitiçado",
        icon: "smitten",
        subtitle: "Você fica enfeitiçado",
        description: "Você fica enfeitiçado por outra criatura",
        reference: "PHB, pg. 290.",
        bullets: [
            "Você não pode atacar quem te enfeitiçou nem alvejá-lo com habilidades ou efeitos mágicos nocivos.",
            "Quem te enfeitiçou tem vantagem em testes de atributos para interagir socialmente com você."
        ]
    },
    {
        title: "Surdo",
        icon: "elf-ear",
        subtitle: "Você não consegue escutar",
        description: "Você não consegue escutar",
        reference: "PHB, pg. 290.",
        bullets: [
            "Você falha automaticamente qualquer teste de atributo que dependa da audição."
        ]
    },
    {
        title: "Exaustão",
        icon: "crawl",
        subtitle: "Você está exausto",
        description: "Exaustão é medida em seis níveis",
        reference: "PHB, pg. 291.",
        bullets: [
            "<table><tr><th>Nível</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Desvantagem em testes de atributo</td></tr><tr><td>2</td><td></td><td></td><td>Velocidade reduzida pela metade</td></tr><tr><td>3</td><td></td><td></td><td>Desvantagem em ataques e testes de resistência</td></tr><tr><td>4</td><td></td><td></td><td>Pontos de Vida máximos reduzidos pela metade</td></tr><tr><td>5</td><td></td><td></td><td>Velocidade reduzida a 0</td></tr><tr><td>6</td><td></td><td></td><td>Morte</td></tr></table>",
            "Você sofre os efeitos do seu atual nível de exaustão e de todos os anteriores.",
            "Terminar um descanso longo reduz seu nível de exaustão, portanto que você tenha comido e bebido."
        ]
    },
    {
        title: "Amedontrado",
        icon: "sharp-smile",
        subtitle: "Você está amedontrado",
        description: "Você está amedontrado",
        reference: "PHB, pg. 290.",
        bullets: [
            "Você tem desvantagem em testes de atributos e ataques enquanto a origem do seu medo estiver no seu campo de visão.",
            "Você não pode, voluntariamente, se mover para mais perto da origem do seu medo."
        ]
    },
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Você foi agarrado",
        description: "Você foi agarrado",
        reference: "PHB, pg. 290.",
        bullets: [          
            "Sua velocidade se torna 0 e você não pode se beneficiar de qualquer bônus à sua velocidade.",
            "Essa condição termina se quem estiver te agarrando for incapacitado.",
            "Essa condição também termina se você for removido do alcance do seu agarrador."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "Você não pode realizar ações ou reações",
        description: "Você não pode realizar ações ou reações",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
    {
        title: "Invisível",
        icon: "invisible",
        subtitle: "Você não pode ser visto",
        description: "Você não pode ser visto sem a ajuda de magia ou sentidos especiais",
        reference: "PHB, pg. 291.",
        bullets: [
            "Para o propósito de se esconder, você é considerado estando numa área completamente obscurecida.",
            "Você ainda pode ser detectado por seus barulhos ou rastros que você possa deixar.",
            "Você tem vantagem em ataques.",
            "Ataques contra você tem desvantagem."
        ]
    },
    {
        title: "Paralisado",
        icon: "internal-injury",
        subtitle: "Você está paralizado",
        description: "Você não pode fazer nada",
        bullets: [
            "Você está incapacitado e não pode se mover ou falar.",
            "Ataques contra você tem vantagem.",
            "Qualquer ataque que te atingir é um crítico se o ataquente estiver a 1,5 metros de você.",
            "Você automaticamente falha testes de resistência de Força e Destreza."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Você é transformado em pedra",
        description: "Você é transformado, junto com todos os objetos não mágicos que você esteja vestindo ou carregando, em uma substância sólida inanimada (normalmente pedra)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Seu peso aumenta em dez vezes e você para de envelhecer.",
            "Você fica incapacitado, não pode andar ou falar, e está inconsciente dos seus arredores.",
            "Ataques contra você tem vantagem.",
            "Você automaticamente falha testes de resistência de Força e Destreza.",
            "Você tem resistência a todo tipo de dano.",
            "Você é uma a venenos e doenças, porém, um veneno ou doença que já estava no seu sistema é suspenso, não neutralizado."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Você está envenenado",
        description: "Você está envenenado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você tem desvantagem em ataques e testes de atributo."
        ]
    },
    {
        title: "Caído",
        icon: "crawl",
        subtitle: "Você está caído no chão",
        description: "Você está caído no chão",
        reference: "PHB, pg. 292.",
        bullets: [
            "O único movimento que você pode executar é se arrastar, a não ser que você se levante.",
            "Você tem desvantagem em ataques.",
            "Ataques contra você tem vantagem se o atacante estiver a 1,5 metros de você, do contrário, o ataque tem desvantagem."
        ]
    },
    {
        title: "Imobilizado",
        icon: "imprisoned",
        subtitle: "Você está imobilizado",
        description: "Você está imobilizado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Sua velocidade se torna 0 e você não pode se beneficiar de qualquer bônus à sua velocidade.",
            "Você tem desvantagem em ataques.",
            "Ataques contra você tem vantagem.",
            "Você tem desvantagem em testes de resistência de Destreza."
        ]
    },
    {
        title: "Atordoado",
        icon: "internal-injury",
        subtitle: "Você está atordoado",
        description: "Você está atordoado",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você fica incapacitado, não pode andar, e fala de maneira vacilante.",
            "Ataques contra você tem vantagem.",
            "Você automaticamente falha testes de resistência de Força e Destreza."
        ]
    },
    {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Você está inconsciente",
        description: "Você está inconsciente",
        reference: "PHB, pg. 292.",
        bullets: [
            "Você fica incapacitado, não pode andar ou falar, e está inconsciente dos seus arredores.",
            "Você larga o que estiver segurando e cai no chão.",
            "Ataques contra você tem vantagem.",
            "Qualquer ataque que te atingir é um crítico se o ataquente estiver a 1,5 metros de você.",
            "Você automaticamente falha testes de resistência de Força e Destreza."
        ]
    }
]
