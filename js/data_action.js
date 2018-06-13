data_action = [
    {
        title: "Attack",
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
            "Usando pelo menos uma mão livre, você tenta agarrar o alvo, fazendo um teste de Força (Atlética) contestado pela Força (Atlética) ou Destreza (Acobacias) do alvo (O alvo escolhe qual atributo usar).",
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
            "Faça um teste de Força (Atlética) contestado pela Força (Atlética) ou Destreza (Acobacias) do alvo (O alvo escolhe qual atributo usar).",
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
        title: "Dash",
        icon: "sprint",
        subtitle: "Double movement speed",
        description: "Gain extra movement for the current turn",
        reference: "PHB, pg. 192.",
        bullets: [
            "The increase equals your speed, after applying any modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Prevent opportunity attacks",
        description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Increase defenses",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 192.",
        bullets: [
            "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
            "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Grant an ally advantage",
        description: "Grant an ally advantage on an ability check or attack",
        reference: "PHB, pg. 192.",
        bullets: [
            "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
            "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
            "The advantage lasts until the start of your next turn."
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "",
        description: "Attempt to hide",
        reference: "PHB, pg. 192.",
        bullets: [
            "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
            "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
            "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
            "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
            "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "",
        description: "Devote your attention to finding something",
        reference: "PHB, pg. 193.",
        bullets: [
            "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Some features use actions",
        description: "Use a racial or class feature that uses an action",
        reference: "See class page for more information.",
        bullets: [

        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Any action not on this list",
        description: "Perform any action you can imagine",
        reference: "PHB, pg. 193.",
        bullets: [
            "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
        ]
    }
]
