data_action = [
    {
        title: "Ataque",
        icon: "crossed-swords",
        subtitle: "Ataque corpo-a-corpo ou à distância",
        description: "Faça um ataque corpo-a-corpo ou à distância com sua arma",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Algumas habilidades, como o <i>Ataque Extra</i> do Guerreiro, te permitem realizar mais de um ataque com essa ação. Cada um desses ataques requer uma rolada separada e pode alvejar criaturas diferentes. Você pode se mover no meio desses ataques.",
            "Quando você ataca com uma arma corpo-a-corpo leve, você pode usar uma ação bônus para atacar com sua outra mão (veja a ação bônus <i>Atacar com a outra mão</i>).",
            "Você pode substituir um dos seus ataques corpo-a-corpo por um <i>Agarrão</i> ou um <i>Empurrão</i>.",
            "Algumas condições lhe concedem vantagem no ataque: ataques contra alvos cegos, paralisados, petrificados, imobilizados, atordoados ou inconscientes; ataques contra alvos caídos; ataques feitos por criaturas invisíveis ou escondidas.",
            "Algumas condições lhe impõe desvantagem no ataque: ataques contra alvos invisíveis ou escondidos; ataques à distância contra alvos caídos; Ataques por criaturas que estejam cegas, amedrontadas, envenenadas ou imobilizadas."
        ]
    },
    {
        title: "Agarrar",
        icon: "grab",
        subtitle: "Ataque corpo-a-corpo especial",
        description: "Tentativa de agarrra uma criatura",
        reference: "PHB, pg. 195.",
        bullets: [
            "Você pode usar a ação de <i>Atacar</i> para realizar um ataque corpo-a-corpo especial, um agarrão. Se você for capaz de realizar múltiplos ataques com uma ação, esse ataque subistitui um deles.",
            "O alvo do seu agarrão deve ser no máximo uma categoria de tamanho maior que você, e deve estar dentro do seu alcance.",
            "Usando pelo menos uma mão livre, você tenta agarrar o alvo, fazendo um teste de Força (Atlética) contestado pela Força (Atlética) ou Destreza (Acrobacias) do alvo (O alvo escolhe qual atributo usar).",
            "Caso tenha sucesso, você impõe a condição de agarrado ao alvo (sua velocidade fica reduzida a 0)."
        ]
    },
    {
        title: "Empurrar",
        icon: "hand",
        subtitle: "Ataque corpo-a-corpo especial",
        description: "Empurre uma criatura, derrubando no chão ou a empurrando para longe de você",
        reference: "PHB, pg. 195.",
        bullets: [
            "Usando a ação de <i>Atacar</i>, você pode realizar um ataque corpo-a-corpo especial para empurrar uma criatura. Se você for capaz de realizar múltiplos ataques com uma ação, esse ataque subistitui um deles.",
            "O alvo do seu empurrão deve ser no máximo uma categoria de tamanho maior que você, e deve estar dentro do seu alcance.",
            "Faça um teste de Força (Atlética) contestado pela Força (Atlética) ou Destreza (Acrobacias) do alvo (O alvo escolhe qual atributo usar).",
            "Caso tenha sucesso, você derruba a criatura no chão ou a empurrar 1,5 metros para longe de você."
        ]
    },
    {
        title: "Lançar uma magia",
        icon: "magic-swirl",
        subtitle: "Tempo de lançamento de 1 ação",
        description: "Lance uma magia cujo tempo de lançamento seja uma ação",
        reference: "PHB, pg. 192.",
        bullets: [
            "Você não pode lançar uma magia com sua ação e lançar uma magia diferente com sua ação bônus no mesmo turno, exceto se a ação for usada para lançar um truque.",
            "O alvo da magia deve estar dentro do alcance da mesma. Para alvejar algo, você deve ter um caminho livre até o alvo, logo, ele não pode estar atrás de uma proteção completa.",
            "Magias que precisam e componentes materiais não consomem tais componentes a não ser que explicitamente dito. A não ser que um custo de material esteja descriminado, você pode assumir que esse custo é ínfimo e os materiais estão disponível na sua bolsa de componentes.",
            "Algumas magias requerem que você mantenha concentração de forma a manter seus efeitos ativos. Se você perder a concentração, esses efeitos terminam. Você perde a concentração em uma magia se você lançar outra magia que precise de concentração ou quando você ficar incapacitado. Cada vez que você sofrer dano, você deve fazer um teste de resistência de Constituição para manter a concentração. O DC é igual ao maior número entre 10 ou metade do dano que você sofrer."
        ]
    },
    {
        title: "Correr",
        icon: "sprint",
        subtitle: "Dobre sua velocidade de movimento",
        description: "Ganhe movimento extra por uma rodada",
        reference: "PHB, pg. 192.",
        bullets: [
            "O aumento é igual a sua velocidade, após serem aplicados quaisquer modificadores."
        ]
    },
    {
        title: "Desengajar",
        icon: "journey",
        subtitle: "Previne ataques de oportunidade",
        description: "Seu movimento não provoca ataques de oportunidade pelo resto do turno",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumenta sua chance de se defender",
        description: "Foque completamente em esquivar dos ataques",
        reference: "PHB, pg. 192.",
        bullets: [
            "Até o começo do seu próximo turno, qualquer ataque feito contra você tem desvantagem se você puder ver o atacante, e você faz testes de resistência de Destreza com vantagem.",
            "Você perde esse benefício se estiver <i>incapacitado</i> ou se sua velocidade cair para zero."
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapar de um agarrão",
        description: "Escapar de um agarrão",
        reference: "PHB, pg. 195.",
        bullets: [
            "Para escapar de um agarrão, você deve obter sucesso em um teste de Força (Atlética) ou Destreza (Acrobacias) contestado pela Força (Atlética) de estiver te segurando.",
            "Escapar de outras condições que o estejam restringindo (como algemas) pode requerir testes de Força ou Destreza, especificados pelas condições."
        ]
    },
    {
        title: "Ajudar",
        icon: "telepathy",
        subtitle: "Conceder vantagem a um aliado",
        description: "Conceder vantagem a um aliado em um teste de atributo ou ataque",
        reference: "PHB, pg. 192.",
        bullets: [
            "O alvo ganha vantagem no seu próximo teste de atributo que ele realizar na tarefa em que você está ajudando.",
            "Alternativamente, o alvo ganho vantagem no seu próximo ataque contra uma criatura que esteja a 1,5 metros de você.",
            "A vantagem dura até o começo do seu próximo turno."
        ]
    },
    {
        title: "Usar Objeto",
        icon: "snatch",
        subtitle: "Interagir, usar habilidades especiais",
        description: "Interagir com um segundo objeto ou usar suas habilidades especiais",
        reference: "PHB, pg. 193.",
        bullets: [
            "Você pode interagir com um objeto de graça no seu turno (como sacar uma arma ou abrir uma porta). Se você quiser interagir com um segundo objeto, use essa ação.",
            "Quando um objeto requer uma ação para ser usado, você também toma esta ação."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Equipar ou desequipar um escudo",
        description: "Equipar ou desequipar um escudo",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "Um escudo sempre requer uma ação para equipar ou desequipar.",
            "Armadura demora alguns minutos para se equipar ou desequipar."
        ]
    },
    {
        title: "Esconder-se",
        icon: "hood",
        subtitle: "Tente se esconder",
        description: "Tente se esconder",
        reference: "PHB, pg. 192.",
        bullets: [
            "Você não pode se esconder de uma criatura que pode te ver. Você deve ter proteção total, estar em uma área completamente obscurecida, estar invisível ou bloquear a visão do inimigo.",
            "Se você fizer barulho (como gritar um aviso ou derrubar um vaso), você revela sua posição.",
            "Quando você tentar se esconder, faça um teste de Destreza (Furtividade) e anote o resultado. Até você ser descoberto ou parar de se esconder, o resultado do teste é contestado pela Sabedoria (Percepção) de qualquer criatura que ativamente procure por sinais da sua presença.",
            "Uma criatura pode te encontrar mesmo que não esteja procurando ativamente portanto que tenha uma percepção passiva maior que seu resultado.",
            "Fora de combate, você também pode fazer um testes de Destreza (Furtividade) para ações como se esconcer dos seus inimigos, passar despercebido por guardas, fugir sem ser detectado ou esgueirar-se até alguém sem ser visto ou ouvido."
        ]
    },
    {
        title: "Procurar",
        icon: "magnifying-glass",
        subtitle: "Concentre sua atenção em encontrar algo",
        description: "Concentre sua atenção em encontrar algo",
        reference: "PHB, pg. 193.",
        bullets: [
            "Dependendo da natureza da sua busca, o Mestre pode pedir um teste de Sabedoria (Percepção) ou um de Inteligência (Investigação)."
        ]
    },
    {
        title: "Prepara uma ação",
        icon: "stopwatch",
        subtitle: "Escolha um gatilho e uma ação",
        description: "Escolha um gatilho e uma ação",
        reference: "PHB, pg. 193.",
        bullets: [
            "Primeiramente, você decide qual circustância perceptível será o gatilho da sua reação.",
            "Após, você escolhe a ação que irá tomar em resposta a esse gatilho, ou você pode optar por se mover até sua velocidade em resposta.",
            "Quando o gatilho ocorrer, você pode tomar sua reação logo após o gatilho terminar ou ignorá-lo.",
            "Quando você preparar uma magia, você pode lançá-la normalmente mas reter sua energia, que você libera na sua reação quando o gatilho ocorrer. Para ser preparada, uma magia deve ter o tempo de lançamento de 1 ação, e reter uma magia requer concentração."
        ]
    },
    {
        title: "Usar Habilidade de classe",
        icon: "embrassed-energy",
        subtitle: "Algumas habilidades usam ações",
        description: "Use uma Habilidade de classe ou racial que seja uma ação",
        reference: "Veja a página da sua classe para mais informações.",
        bullets: [

        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Qualquer ação que não esteja nessa lista",
        description: "Faça qualquer ação que você possa imaginar",
        reference: "PHB, pg. 193.",
        bullets: [
            "Quando você descrever uma ação que não está detalhada nas regras, o Mestre te diz se essa ação é possível e quais os critérios, se houver, para determinar o sucesso ou fracasso.",
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
