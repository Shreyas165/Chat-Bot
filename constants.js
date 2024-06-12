const prompts = [
//0 
["hi", "hey", "hello"],
//1
["how are you", "how are things"],
//2
["what is going on", "what is up"],
//3
["happy", "good", "well", "fantastic", "cool"],
//4
["bad", "bored", "tired", "sad"],
//5
["tell me story", "tell me joke"],
//6
["thanks", "thank you"],
//7
["bye", "good bye", "goodbye"],
//8
  ["a section maths teacher", "who takes maths for a section", "who is first sem maths lecturer for a section"],
//9
  ["a section physics teacher", "who takes physics for a section", "who is first sem physics lecturer for a section", "who is a section physics teacher"],
//10
  ["a section elements of civil engineering teacher", "who takes civil for a section", "who is first sem civil lecturer for a section", "a section civil teacher", "who takes elements of civil engineering for a section", "who is first sem elements of civil engineering lecturer for a section", "who is a section civil teacher"],
//11
  ["a section basic electronics teacher", "who takes  basic electronics for a section", "who is first sem  basic electronics lecturer for a section", "a section electronics teacher", "who takes electronics for a section",  "who is first sem electronics lecturer for a section", "who is a section electronics teacher"],
//12
  ["a section applied digital logic design teacher", "who takes applied digital logic design for a section", "who is first sem applied digital logic design lecturer for a section", "a section ld teacher", "who takes ld for a section", "who is first sem ld lecturer for a section", "who is a section logic design teacher"],
//13
  ["a section technical english teacher", "who takes technical english for a section", "who is first sem technical english lecturer for a section", "a section english teacher", "who takes english for a section", "who is first sem english lecturer for a section", "who is a section english teacher"],
//14
  ["a section constitution of india lecturer", "who takes constitution of india for a section", "who is first sem constitution of india lecturer for a section", "a section coi lecturer", "who takes coi a section", "who is first sem coi lecturer for a section", "who is a section coi teacher"],
//15
  ["a section class advisor", "who is the class advisor of a section", "class advisor for a section", "who is a section class advisor"],
//16
  ["b section maths teacher", "who takes maths for b section", "who is first sem maths lecturer for b section", "who is b section maths teacher"],
//17
  ["b section physics teacher", "who takes physics for b section", "who is first sem physics lecturer for b section", "who is b section physics teacher"],
//18
  ["b section elements of civil engineering teacher", "who takes civil for b section", "who is first sem civil lecturer for b section", "b section civil teacher", "who takes elements of civil engineering for b section", "who is first sem elements of civil engineering lecturer for b section", "who is b section civil teacher"],
//19
  ["b section basic electronics teacher", "who takes  basic electronics for b section", "who is first sem  basic electronics lecturer for b section", "b section electronics teacher", "who takes electronics for b section",  "who is first sem electronics lecturer for b section", "who is b section electronics teacher"],
//20
  ["b section applied digital logic design teacher", "who takes applied digital logic design for b section", "who is first sem applied digital logic design lecturer for b section", "b section ld teacher", "who takes ld for b section", "who is first sem ld lecturer for b section", "who is b section ld teacher"],
//21
  ["b section technical english teacher", "who takes technical english for b section", "who is first sem technical english lecturer for b section", "b section english teacher", "who takes english for b section", "who is first sem english lecturer for b section", "who is b section english teacher"],
//22
  ["b section constitution of india lecturer", "who takes constitution of india for b section", "who is first sem constitution of india lecturer for b section", "b section coi lecturer", "who takes coi b section", "who is first sem coi lecturer for b section", "who is b section coi teacher"],
//23
  ["c section maths teacher", "who takes maths for c section", "who is first sem maths lecturer for c section", "who is c section maths teacher"],
//24
  ["c section physics teacher", "who takes physics for c section", "who is first sem physics lecturer for c section", "who is c section physics teacher"],
//25
  ["c section elements of civil engineering teacher", "who takes civil for c section", "who is first sem civil lecturer for c section", "c section civil teacher", "who takes elements of civil engineering for c section", "who is first sem elements of civil engineering lecturer for c section", "who is c section civil teacher"],
//26
  ["c section basic electronics teacher", "who takes  basic electronics for c section", "who is first sem  basic electronics lecturer for c section", "c section electronics teacher", "who takes electronics for c section",  "who is first sem electronics lecturer for c section", "who is c section electronics teacher"],
//27
  ["c section applied digital logic design teacher", "who takes applied digital logic design for c section", "who is first sem applied digital logic design lecturer for c section", "c section ld teacher", "who takes ld for c section", "who is first sem ld lecturer for c section", "who is c section logic design teacher"],
//28
  ["c section technical english teacher", "who takes technical english for c section", "who is first sem technical english lecturer for c section", "c section english teacher", "who takes english for c section", "who is first sem english lecturer for c section", "who is c section english teacher"],
//29
  ["c section constitution of india lecturer", "who takes constitution of india for c section", "who is first sem constitution of india lecturer for c section", "c section coi lecturer", "who takes coi c section", "who is first sem coi lecturer for c section", "who is c section coi teacher"],
//30
  ["c section class advisor", "who is the class advisor of c section", "class advisor for c section", "who is c section class advisor"],
//31  
  ["b section class advisor", "who is the class advisor of b section", "class advisor for b section", "who is b section class advisor"], 
//32
  ["d section maths teacher", "who takes maths for d section", "who is first sem maths lecturer for d section", "who is d section maths teacher"],
//33
  ["d section physics teacher", "who takes physics for d section", "who is first sem physics lecturer for d section", "who is d section physics teacher"],
//34
  ["d section elements of civil engineering teacher", "who takes civil for d section", "who is first sem civil lecturer for d section", "d section civil teacher", "who takes elements of civil engineering for d section", "who is first sem elements of civil engineering lecturer for d section", "who is d section civil teacher"],
//35
  ["d section basic electronics teacher", "who takes  basic electronics for d section", "who is first sem  basic electronics lecturer for d section", "d section electronics teacher", "who takes electronics for d section",  "who is first sem electronics lecturer for d section", "who is d section electronics teacher"],
//36
  ["d section applied digital logic design teacher", "who takes applied digital logic design for d section", "who is first sem applied digital logic design lecturer for d section", "d section ld teacher", "who takes ld for d section", "who is first sem ld lecturer for d section", "who is d section logic design teacher"],
//37
  ["d section technical english teacher", "who takes technical english for d section", "who is first sem technical english lecturer for d section", "d section english teacher", "who takes english for d section", "who is first sem english lecturer for d section", "who is d section english teacher"],
//38
  ["d section constitution of india lecturer", "who takes constitution of india for d section", "who is first sem constitution of india lecturer for d section", "d section coi lecturer", "who takes coi d section", "who is first sem coi lecturer for d section", "who is d section coi teacher"],
//39
  ["d section class advisor", "who is the class advisor of d section", "class advisor for d section", "who is d section class advisor"],
//40
  ["maths teacher", "physics teacher", "civil teacher", "elements of civil engineering teacher", "electronics teacher", "basic electronics teacher", "applied digital and logic design teacher", "adld teacher", "english teacher", "technical english teacher", "constitution of india teacher"],
//41 
  ["e section maths teacher", "who takes maths for e section", "who is first sem maths lecturer for e section", "who is e section maths teacher"],
//42
  ["e section physics teacher", "who takes physics for e section", "who is first sem physics lecturer for e section", "who is e section physics teacher"],
//43
  ["e section elements of civil engineering teacher", "who takes civil for e section", "who is first sem civil lecturer for e section", "e section civil teacher", "who takes elements of civil engineering for e section", "who is first sem elements of civil engineering lecturer for e section", "who is e section civil teacher"],
//44
  ["e section basic electronics teacher", "who takes  basic electronics for e section", "who is first sem  basic electronics lecturer for e section", "e section electronics teacher", "who takes electronics for e section",  "who is first sem electronics lecturer for e section", "who is d section electronics teacher"],
//45
  ["e section applied digital logic design teacher", "who takes applied digital logic design for e section", "who is first sem applied digital logic design lecturer for e section", "e section ld teacher", "who takes ld for e section", "who is first sem ld lecturer for e section", "who is e section logic design teacher"],
//46
  ["e section technical english teacher", "who takes technical english for e section", "who is first sem technical english lecturer for e section", "e section english teacher", "who takes english for e section", "who is first sem english lecturer for e section", "who is e section english teacher"],
//47
  ["e section constitution of india lecturer", "who takes constitution of india for e section", "who is first sem constitution of india lecturer for e section", "e section coi lecturer", "who takes coi e section", "who is first sem coi lecturer for e section", "who is e section coi teacher"],
//48
  ["e section class advisor", "who is the class advisor of e section", "class advisor for e section", "who is e section class advisor"],
//49
  ["f section maths teacher", "who takes maths for f section", "who is first sem maths lecturer for f section", "who is f section maths teacher"],
//50 
  ["f section physics teacher", "who takes physics for f section", "who is first sem physics lecturer for f section", "who is f section physics teacher"],
//51
  ["f section elements of civil engineering teacher", "who takes civil for f section", "who is first sem civil lecturer for f section", "f section civil teacher", "who takes elements of civil engineering for f section", "who is first sem elements of civil engineering lecturer for f section", "who is f section civil teacher"],
//52
  ["f section basic electronics teacher", "who takes  basic electronics for f section", "who is first sem  basic electronics lecturer for f section", "f section electronics teacher", "who takes electronics for f section",  "who is first sem electronics lecturer for f section", "who is f section electronics teacher"],
//53
  ["f section applied digital logic design teacher", "who takes applied digital logic design for f section", "who is first sem applied digital logic design lecturer for f section", "f section ld teacher", "who takes ld for f section", "who is first sem ld lecturer for f section", "who is f section logic design teacher"],
//54
  ["f section technical english teacher", "who takes technical english for f section", "who is first sem technical english lecturer for f section", "f section english teacher", "who takes english for f section", "who is first sem english lecturer for f section", "who is f section english teacher"],
//55
  ["f section constitution of india lecturer", "who takes constitution of india for f section", "who is first sem constitution of india lecturer for f section", "f section coi lecturer", "who takes coi f section", "who is first sem coi lecturer for f section", "who is f section coi teacher"], 
//56
  ["f section class advisor", "who is the class advisor of f section", "class advisor for f section", "who is f section class advisor"],
//57
  ["m section maths teacher", "who takes maths for m section", "who is first sem maths lecturer for m section", "who is m section maths teacher"],
//58
  ["m section chemistry teacher", "m section engineering chemistry teacher", "who takes chemistry for m section", "who takes engineering chemistry for m section", "who is first sem chemistry lecturer for m section", "who is first sem engineering chemistry lecturer for m section", "who is m section chemistry teacher"],
//59
  ["m section problem solving through programming teacher", "who takes problem solving through programming for m section", "who is first sem problem solving through programming lecturer for m section", "who is m section problem solving through programming teacher"],
//60
  ["m section basic electrical engineering teacher", "m section bee teacher", "who takes basic electrical engineering for m section", "who takes bee for m section", "who is first sem basic electrical engineering lecturer for m section", "who is first sem bee lecturer for m section", "who is m section electrical engineering teacher"],
//61  
//62
  ["who takes biology for m section", "m section biology teacher", "who teaches biology for m section", "who takes bio for m section", "m section bio teacher", "who teaches bio for m section", "who is m section biology teacher"],
//63
  ["who takes evs for m section", "m section evs teacher", "who teaches evs for m section", "who takes environmental science for m section", "m section environmental science teacher", "who teaches environmental science for m section", "who is m section evs teacher"],
//64
  ["who takes cpp for m section", "m section cpp teacher", "who takes cpp for m section", "who is m section cpp"],
//65
  ["m section class advisor", "who is the class advisor of m section", "class advisor for m section", "who is m section class advisor"],
//66
  ["n section maths teacher", "who takes maths for n section", "who is first sem maths lecturer for n section", "who is n section maths teacher"],
//67
  ["n section chemistry teacher", "n section engineering chemistry teacher", "who takes chemistry for n section", "who takes engineering chemistry for n section", "who is first sem chemistry lecturer for n section", "who is first sem engineering chemistry lecturer for n section", "who is n section chemistry teacher"],
//68
  ["n section problem solving through programming teacher", "who takes problem solving through programming for n section", "who is first sem problem solving through programming lecturer for n section", "who is n section problem solving through programming teacher"],
//69
  ["n section basic electrical engineering teacher", "n section bee teacher", "who takes basic electrical engineering for n section", "who takes bee for n section", "who is first sem basic electrical engineering lecturer for n section", "who is first sem bee lecturer for n section", "who is n section electrical engineering teacher"],
//70
//71
  ["who takes biology for n section", "n section biology teacher", "who teaches biology for n section", "who takes bio for n section", "n section bio teacher", "who teaches bio for n section", "who is n section biology teacher"],
//72
  ["who takes evs for n section", "n section evs teacher", "who teaches evs for n section", "who takes environmental science for n section", "n section environmental science teacher", "who teaches environmental science for n section", "who is n section evs teacher"],
//73
  ["who takes cpp for n section", "n section cpp teacher", "who takes cpp for n section", "who is n section cpp teacher"],
//74
  ["n section class advisor", "who is the class advisor of n section", "class advisor for n section", "who is n section class advisor teacher"],
//75
  ["q section maths teacher", "who takes maths for q section", "who is first sem maths lecturer for q section", "who is q section maths teacher"],
//76
  ["q section chemistry teacher", "q section engineering chemistry teacher", "who takes chemistry for q section", "who takes engineering chemistry for q section", "who is first sem chemistry lecturer for q section", "who is first sem engineering chemistry lecturer for q section", "who is q section chemistry teacher"],
//77
  ["q section problem solving through programming teacher", "who takes problem solving through programming for q section", "who is first sem problem solving through programming lecturer for q section", "who is q section problem solving through programming teacher"],
//78
  ["q section basic electrical engineering teacher", "q section bee teacher", "who takes basic electrical engineering for q section", "who takes bee for q section", "who is first sem basic electrical engineering lecturer for q section", "who is first sem bee lecturer for q section", "who is q section electrical engineering teacher"],
//79
//80
  ["who takes biology for q section", "q section biology teacher", "who teaches biology for q section", "who takes bio for q section", "q section bio teacher", "who teaches bio for q section", "who is q section biology teacher"],
//81
  ["who takes evs for q section", "q section evs teacher", "who teaches evs for q section", "who takes environmental science for q section", "q section environmental science teacher", "who teaches environmental science for q section", "who is q section evs teacher"],
//82
  ["who takes cpp for q section", "q section cpp teacher", "who takes cpp for q section", "who is q section cpp teacher"],
//83
  ["q section class advisor", "who is the class advisor of q section", "class advisor for q section", "who is q section class advisor"],
//84
  ["r section maths teacher", "who takes maths for r section", "who is first sem maths lecturer for r section", "who is r section maths teacher"], 
//85
  ["r section chemistry teacher", "r section engineering chemistry teacher", "who takes chemistry for r section", "who takes engineering chemistry for r section", "who is first sem chemistry lecturer for r section", "who is first sem engineering chemistry lecturer for r section", "who is r section chemistry teacher"],
//86
  ["r section problem solving through programming teacher", "who takes problem solving through programming for r section", "who is first sem problem solving through programming lecturer for r section", "who takes cpp for q section", "q section cpp teacher", "who takes cpp for q section", "who is r section cpp teacher"],
//87
  ["r section basic electrical engineering teacher", "r section bee teacher", "who takes basic electrical engineering for r section", "who takes bee for r section", "who is first sem basic electrical engineering lecturer for r section", "who is first sem bee lecturer for r section", "who is r section electrical engineering teacher"],
//88
//89
  ["who takes biology for r section", "r section biology teacher", "who teaches biology for r section", "who takes bio for r section", "r section bio teacher", "who teaches bio for r section", "who is r section biology teacher"],
//90  
  ["who takes evs for r section", "r section evs teacher", "who teaches evs for r section", "who takes environmental science for r section", "r section environmental science teacher", "who teaches environmental science for r section", "who is r section evs teacher"],
//91
  ["r section class advisor", "who is the class advisor of r section", "class advisor for r section", "who is r section class advisor"],
//92
  ["s section maths teacher", "who takes maths for s section", "who is first sem maths lecturer for s section", "who is s section maths teacher"], 
//93
  ["s section chemistry teacher", "s section engineering chemistry teacher", "who takes chemistry for s section", "who takes engineering chemistry for s section", "who is first sem chemistry lecturer for s section", "who is first sem engineering chemistry lecturer for s section", "who is s section chemistry teacher"],
//94
  ["s section problem solving through programming teacher", "who takes problem solving through programming for s section", "who is first sem problem solving through programming lecturer for s section", "who takes cpp for s section", "s section cpp teacher", "who takes cpp for s section", "who is s section cpp teacher"],
//95
  ["s section basic electrical engineering teacher", "s section bee teacher", "who takes basic electrical engineering for s section", "who takes bee for s section", "who is first sem basic electrical engineering lecturer for s section", "who is first sem bee lecturer for s section", "who is s section electrical engineering teacher"],
//96
  ["s section elements of mechanical engineering teacher", "s section mechanical teacher", "who takes elements of mechanical engineering for s section", "who takes mechanical subject for s section", "who is first sem mechanical teacher for s section", "who is s section mechanical teacher"], 
//97
  ["who takes biology for s section", "s section biology teacher", "who teaches biology for s section", "who takes bio for s section", "s section bio teacher", "who teaches bio for s section", "who is s section biology teacher"],
//98
  ["who takes evs for s section", "s section evs teacher", "who teaches evs for s section", "who takes environmental science for s section", "s section environmental science teacher", "who teaches environmental science for s section", "who is s section evs teacher"],
//99
  ["s section class advisor", "who is the class advisor of s section", "class advisor for s section", "who is s section class advisor"],
//100
  ["t section maths teacher", "who takes maths for t section", "who is first sem maths lecturer for t section", "who is t section maths teacher"],
//101
  ["t section chemistry teacher", "t section engineering chemistry teacher", "who takes chemistry for t section", "who takes engineering chemistry for t section", "who is first sem chemistry lecturer for t section", "who is first sem engineering chemistry lecturer for t section", "who is t section chemistry teacher"],
//102
  ["t section problem solving through programming teacher", "who takes problem solving through programming for t section", "who is first sem problem solving through programming lecturer for t section", "who takes cpp for t section", "t section cpp teacher", "who takes cpp for t section", "who is t section cpp teacher"], 
//103
  ["t section basic electrical engineering teacher", "t section bee teacher", "who takes basic electrical engineering for t section", "who takes bee for t section", "who is first sem basic electrical engineering lecturer for t section", "who is first sem bee lecturer for t section", "who is t section electrical engineering teacher"],
//104
  ["t section elements of mechanical engineering teacher", "t section mechanical teacher", "who takes elements of mechanical engineering for t section", "who takes mechanical subject for t section", "who is first sem mechanical teacher for t section", "who is t section mechanical teacher"], 
//105
  ["who takes biology for t section", "t section biology teacher", "who teaches biology for t section", "who takes bio for t section", "t section bio teacher", "who teaches bio for t section", "who is t section biology teacher"],
//106
  ["who takes evs for t section", "t section evs teacher", "who teaches evs for t section", "who takes environmental science for t section", "t section environmental science teacher", "who teaches environmental science for t section", "who is t section evs teacher"],
//107
  ["t section class advisor", "who is the class advisor of t section", "class advisor for t section", "who is t section class advisor"],
//108
  ["u section maths teacher", "who takes maths for u section", "who is first sem maths lecturer for u section", "who is u section maths teacher"],
//109
  ["u section chemistry teacher", "u section engineering chemistry teacher", "who takes chemistry for u section", "who takes engineering chemistry for u section", "who is first sem chemistry lecturer for u section", "who is first sem engineering chemistry lecturer for u section", "who is u section chemistry teacher"],
//110
  ["u section problem solving through programming teacher", "who takes problem solving through programming for u section", "who is first sem problem solving through programming lecturer for u section", "who takes cpp for u section", "u section cpp teacher", "who takes cpp for u section", "who is u section cpp teacher"], 
//111
  ["u section basic electrical engineering teacher", "u section bee teacher", "who takes basic electrical engineering for u section", "who takes bee for u section", "who is first sem basic electrical engineering lecturer for u section", "who is first sem bee lecturer for u section", "who is u section electrical engineering teacher"],
//112
  ["u section elements of mechanical engineering teacher", "u section mechanical teacher", "who takes elements of mechanical engineering for u section", "who takes mechanical subject for u section", "who is first sem mechanical teacher for u section", "who is u section mechanical teacher"],  
//113
  ["who takes biology for u section", "u section biology teacher", "who teaches biology for u section", "who takes bio for u section", "u section bio teacher", "who teaches bio for u section", "who is u section biology teacher"],
//114
  ["who takes evs for u section", "u section evs teacher", "who teaches evs for u section", "who takes environmental science for u section", "u section environmental science teacher", "who teaches environmental science for u section", "who is u section evs teacher"],
//115
  ["u section class advisor", "who is the class advisor of u section", "class advisor for u section", "who is u section class advisor"],
//116
  ["v section maths teacher", "who takes maths for v section", "who is first sem maths lecturer for v section", "who is v section maths teacher"],
//117
  ["v section chemistry teacher", "v section engineering chemistry teacher", "who takes chemistry for v section", "who takes engineering chemistry for v section", "who is first sem chemistry lecturer for v section", "who is first sem engineering chemistry lecturer for v section", "who is v section chemistry teacher"],
//118
  ["v section problem solving through programming teacher", "who takes problem solving through programming for v section", "who is first sem problem solving through programming lecturer for v section", "who takes cpp for v section", "v section cpp teacher", "who takes cpp for v section", "who is v section cpp teacher"], 
//119
  ["v section basic electrical engineering teacher", "v section bee teacher", "who takes basic electrical engineering for v section", "who takes bee for v section", "who is first sem basic electrical engineering lecturer for v section", "who is first sem bee lecturer for v section", "who is v section electrical engineering teacher"],
//120
  ["v section elements of mechanical engineering teacher", "v section mechanical teacher", "who takes elements of mechanical engineering for v section", "who takes mechanical subject for v section", "who is first sem mechanical teacher for v section", "who is v section mechanical teacher"],  
//121
  ["who takes biology for v section", "v section biology teacher", "who teaches biology for v section", "who takes bio for v section", "v section bio teacher", "who teaches bio for v section", "who is v section biology teacher"],
//122
  ["who takes evs for v section", "v section evs teacher", "who teaches evs for v section", "who takes environmental science for v section", "v section environmental science teacher", "who teaches environmental science for v section", "who is v section evs teacher"],
//123
  ["v section class advisor", "who is the class advisor of v section", "class advisor for v section", "who is v section class advisor"],
//124
  ["g section maths teacher", "who takes maths for g section", "who is first sem maths lecturer for g section", "who is g section maths teacher"],
//125
  ["g section physics teacher", "who takes physics for g section", "who is first sem physics lecturer for g section", "who is g section physics teacher"],
//126
  ["g section elements of civil engineering teacher", "who takes civil for g section", "who is first sem civil lecturer for g section", "g section civil teacher", "who takes elements of civil engineering for g section", "who is first sem elements of civil engineering lecturer for g section", "who is g section civil teacher"],
//127
  ["g section basic electronics teacher", "who takes  basic electronics for g section", "who is first sem  basic electronics lecturer for g section", "g section electronics teacher", "who takes electronics for g section",  "who is first sem electronics lecturer for g section", "who is g section electronics teacher"],
//128
  ["g section applied digital logic design teacher", "who takes applied digital logic design for g section", "who is first sem applied digital logic design lecturer for g section", "g section ld teacher", "who takes ld for g section", "who is first sem ld lecturer for g section", "who is g section logic design teacher"],
//129
  ["g section technical english teacher", "who takes technical english for g section", "who is first sem technical english lecturer for g section", "g section english teacher", "who takes english for g section", "who is first sem english lecturer for g section", "who is g section english teacher"],
//130
  ["g section constitution of india lecturer", "who takes constitution of india for g section", "who is first sem constitution of india lecturer for g section", "g section coi lecturer", "who takes coi g section", "who is first sem coi lecturer for g section", "who is g section coi teacher"], 
//131
  ["g section class advisor", "who is the class advisor of g section", "class advisor for g section", "who is g section class advisor"],
//132
  ["h section maths teacher", "who takes maths for h section", "who is first sem maths lecturer for h section", "who is h section maths teacher"],
//133
  ["h section physics teacher", "who takes physics for h section", "who is first sem physics lecturer for h section", "who is h section physics teacher"],
//134
  ["h section elements of civil engineering teacher", "who takes civil for h section", "who is first sem civil lecturer for h section", "h section civil teacher", "who takes elements of civil engineering for h section", "who is first sem elements of civil engineering lecturer for h section", "who is h section civil teacher"],
//135
  ["h section basic electronics teacher", "who takes  basic electronics for h section", "who is first sem  basic electronics lecturer for h section", "h section electronics teacher", "who takes electronics for h section",  "who is first sem electronics lecturer for h section", "who is h section electronics teacher"],
//136
  ["h section applied digital logic design teacher", "who takes applied digital logic design for h section", "who is first sem applied digital logic design lecturer for h section", "h section ld teacher", "who takes ld for h section", "who is first sem ld lecturer for h section", "who is h section logic design teacher"],
//137
  ["h section technical english teacher", "who takes technical english for h section", "who is first sem technical english lecturer for h section", "h section english teacher", "who takes english for h section", "who is first sem english lecturer for h section", "who is h section english teacher"],
//138
  ["h section constitution of india lecturer", "who takes constitution of india for h section", "who is first sem constitution of india lecturer for h section", "h section coi lecturer", "who takes coi h section", "who is first sem coi lecturer for h section", "who is h section coi teacher"], 
//139
  ["h section class advisor", "who is the class advisor of h section", "class advisor for h section", "who is h section class advisor"],
//140
  ["i section maths teacher", "who takes maths for i section", "who is first sem maths lecturer for i section", "who is i section maths teacher", "who is i section maths teacher"],
//141
  ["i section physics teacher", "who takes physics for i section", "who is first sem physics lecturer for i section", "who is i section physics teacher"],
//142
  ["i section elements of civil engineering teacher", "who takes civil for i section", "who is first sem civil lecturer for i section", "i section civil teacher", "who takes elements of civil engineering for i section", "who is first sem elements of civil engineering lecturer for i section", "who is i section civil teacher"],
//143
  ["i section basic electronics teacher", "who takes  basic electronics for i section", "who is first sem  basic electronics lecturer for i section", "i section electronics teacher", "who takes electronics for i section",  "who is first sem electronics lecturer for i section"],
//144
  ["i section computer aided engineering graphics teacher", "who takes computer aided engineering graphics for i section", "who is first sem computer aided engineering graphics lecturer for i section", "i section caeg teacher", "who takes caeg for i section", "who is first sem caeg lecturer for i section"],
//145
  ["i section technical english teacher", "who takes technical english for i section", "who is first sem technical english lecturer for i section", "i section english teacher", "who takes english for i section", "who is first sem english lecturer for i section"],
//146
  ["i section constitution of india lecturer", "who takes constitution of india for i section", "who is first sem constitution of india lecturer for i section", "i section coi lecturer", "who takes coi i section", "who is first sem coi lecturer for i section"], 
//147
  ["i section class advisor", "who is the class advisor of i section", "class advisor for i section"],
//148
  ["j section maths teacher", "who takes maths for j section", "who is first sem maths lecturer for j section", "who is j section maths teacher"],
//149
  ["j section physics teacher", "who takes physics for j section", "who is first sem physics lecturer for j section"],
//150
  ["j section elements of civil engineering teacher", "who takes civil for j section", "who is first sem civil lecturer for j section", "j section civil teacher", "who takes elements of civil engineering for j section", "who is first sem elements of civil engineering lecturer for j section"],
//151
  ["j section basic electronics teacher", "who takes  basic electronics for j section", "who is first sem  basic electronics lecturer for j section", "j section electronics teacher", "who takes electronics for j section",  "who is first sem electronics lecturer for j section"],
//152
  ["j section computer aided engineering graphics teacher", "who takes computer aided engineering graphics for j section", "who is first sem computer aided engineering graphics lecturer for j section", "j section caeg teacher", "who takes caeg for j section", "who is first sem caeg lecturer for j section"],
//153
  ["j section technical english teacher", "who takes technical english for j section", "who is first sem technical english lecturer for j section", "j section english teacher", "who takes english for j section", "who is first sem english lecturer for j section"],
//154
  ["j section constitution of india lecturer", "who takes constitution of india for j section", "who is first sem constitution of india lecturer for j section", "j section coi lecturer", "who takes coi j section", "who is first sem coi lecturer for j section"], 
//155
  ["j section class advisor", "who is the class advisor of j section", "class advisor for j section"],
//156
  ["k section maths teacher", "who takes maths for k section", "who is first sem maths lecturer for k section"],
//157
  ["k section chemistry teacher", "k section engineering chemistry teacher", "who takes chemistry for k section", "who takes engineering chemistry for k section", "who is first sem chemistry lecturer for k section", "who is first sem engineering chemistry lecturer for k section"],
//158
  ["k section problem solving through programming teacher", "who takes problem solving through programming for k section", "who is first sem problem solving through programming lecturer for k section", "who takes cpp for k section", "k section cpp teacher", "who takes cpp for k section"], 
//159
  ["k section basic electrical engineering teacher", "k section bee teacher", "who takes basic electrical engineering for k section", "who takes bee for k section", "who is first sem basic electrical engineering lecturer for k section", "who is first sem bee lecturer for k section"],
//160
  ["k section elements of mechanical engineering teacher", "k section mechanical teacher", "who takes elements of mechanical engineering for k section", "who takes mechanical subject for k section", "who is first sem mechanical teacher for k section"],  
//161
  ["who takes biology for k section", "k section biology teacher", "who teaches biology for k section", "who takes bio for k section", "k section bio teacher", "who teaches bio for k section"],
//162
  ["who takes evs for k section", "k section evs teacher", "who teaches evs for k section", "who takes environmental science for k section", "k section environmental science teacher", "who teaches environmental science for k section"],
//163
  ["k section class advisor", "who is the class advisor of k section", "class advisor for k section"],
//164
  ["l section maths teacher", "who takes maths for l section", "who is first sem maths lecturer for l section"],
//165
  ["l section chemistry teacher", "l section engineering chemistry teacher", "who takes chemistry for l section", "who takes engineering chemistry for l section", "who is first sem chemistry lecturer for l section", "who is first sem engineering chemistry lecturer for l section"],
//166
  ["l section problem solving through programming teacher", "who takes problem solving through programming for l section", "who is first sem problem solving through programming lecturer for l section", "who takes cpp for l section", "l section cpp teacher", "who takes cpp for l section"], 
//167
  ["l section basic electrical engineering teacher", "l section bee teacher", "who takes basic electrical engineering for l section", "who takes bee for l section", "who is first sem basic electrical engineering lecturer for l section", "who is first sem bee lecturer for l section"],
//168
  ["l section elements of mechanical engineering teacher", "l section mechanical teacher", "who takes elements of mechanical engineering for l section", "who takes mechanical subject for l section", "who is first sem mechanical teacher for l section"],  
//169
  ["who takes biology for l section", "l section biology teacher", "who teaches biology for l section", "who takes bio for l section", "l section bio teacher", "who teaches bio for l section"],
//170
  ["who takes evs for l section", "l section evs teacher", "who teaches evs for l section", "who takes environmental science for l section", "l section environmental science teacher", "who teaches environmental science for l section"],
//171
  ["l section class advisor", "who is the class advisor of l section", "class advisor for l section"],
//172
  ["who am i"]


];

const replies = [
//0 
["Hello!", "Hi!", "Hey!", "Hi there!"], 
//1
[
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
//2
[
    "Nothing much", 
    "Exciting things!"
  ],
//3
["Glad to hear it"],
//4
["Why?", "Cheer up buddy"],
//5
["What about?", "Once upon a time..."],
//6
["You're welcome", "No problem"],
//7
["Goodbye", "See you later"],
//8
["Ms.Bhavya k"],
//9
["Dr.Shyam Prasad K"],
//10
["Dr.Shriram Marathe"],
//11
["Dr.Durga Prasad"],
//12
["Ms.Harshitha Bhat"],
//13
["Dr.Vishwanatha"],
//14
["Shyla Mendonca"],
//15
["Ms.Bhavya K and Ms.Harshitha Bhat"],
//16
["Ms.Smitha G V"],
//17
["Dr.Nagaraja B S"],
//18
["Mr.Gururaj Acharya"],
//19
["Ms.Sushma P S"],
//20
["Dr.Roopa B H"],
//21
["Dr.Vishwanatha"],
//22
["Dr.Jnaneshwar Pai Maroor"],
//23
["Ms.Anitha D Bayar"],
//24
["Dr.Sathyajith K T"],
//25
["Mr.Shanmukha Shetty"],
//26
["Ms.Padmavathi K"],
//27
["Ms.Subha B"],
//28
["Dr.Joy Elvine Martis"],
//29
["Dr.Jnaneshwar Pai Maroor"],
//30
["Ms.Anitha D Bayar and Mr.Shanmukha Shetty"],
//31
["Dr.Nagaraja B S and Ms.Sushma P S"],
//32
["Ms.Smitha G V"],
//33
["Dr.Shoba R Prabhu"],
//34
["Mr.tushar S Shetty"],
//35
["Ms.Ramya Shetty"],
//36
["Ms.Rashmi Naveen"],
//37
["Ms.Shwetha Bharath"],
//38
["Ms.Sonia Lobo"],
//39
["Ms.Smitha G V and Ma.Ramya Shetty"],
//40
["please type your section and try again"],
//41
["Ms.Soumya Aithal"],
//42
["Dr.Raghavendra Bairy"],
//43
["Mr.Gururaj Acharya"],
//44
["Ms.Subha B"],
//45
["Ms.Preethi Salian K"],
//46
["Dr. Joy Elvine Martis"],
//47
["Dr.Janeshwar Pai Maroor"],
//48
["Dr.Raghavendra Bairy and Ms.Soumya Aithal"],
//49
["Ms.Soumya Aithal"],
//50
["Dr.Manjunatha K B"],
//51
["Mr.Rakshith Kumar Shetty"],
//52
["Dr.Shrividya G"],
//53
["Mr.Krishnaraj rao"],
//54
["Dr.Vishwanatha"],
//55
["Ms.Shyla Mendoncs"],
//56
["Dr.Manjunatha K B and Mr.Rakshith Kumar Shetty"],
//57
["Dr.Vasanth K R"],
//58
["Dr.Subrahmanya I Bhat"],
//59
["Ms.Manasa G R"],
//60
["Mr.Gururaj Rao"],
//61
//62
["Dr.Venkatesh Kamath"],
//63
["Ms.Deekshitha K"],
//64
["Ms.Manasa G R"],
//65
["Dr.Vasanth K R and Ms.Manasa G R"],
//66
["Ms.Vinaya Acharya"],
//67
["Dr.Aarathi S Bhatt"],
//68
["Ms.Rajashree"],
//69
["Dr.Narayana Shetty"],
//70
//71
["Dr.Anilkumar H S"],
//72
["Ms Deekshitha K"],
//73
["Ms.Rajashree"],
//74
["Ms.Vinaya Acharya and Dr.Aarathi S Bhatt"],
//75
["Ms.Vinaya Acharya"],
//76
["Dr.Sarvajith M S"],
//77
["Ms.Aishwarya D Shetty"],
//78
["Ms.Swathi Hatwar H"],
//79
//80
["Dr.Anilkumar H S"],
//81
["Mr.Prithviraj"],
//82
["Ms.Aishwarya D Shetty"],
//83
["Dr.Sarvajith M S and Ms.Swathi Hatwar H"],
//84
["Dr.Sharad M Hegde"],
//85
["Dr.Aarti S Bhatt"],
//86
["Ms.Rajalakshmi Hegde"],
//87
["Mr.Pradeep Kumar"],
//88
//89
["Dr.Santhosh Poojary"],
//90
["Mr.Prithviraj H K"],
//91
["Ms.Rajalakshmi Hegde and Mr.Pradeep Kumar"],
//92
["Ms.Sharmila"],
//93
["Dr.Shivprasad Shetty"],
//94
["need to be updated"],
//95
["Mr.Mahabaleshwara Sharma"],
//96
["needs to be updated"],
//97
["Dr.Santosh Poojari"],
//98
["Dr.Sharanya P"],
//99
["Ms.Sharmila"],
//100
["Ms.Sharmila"],
//101
["Dr. Sarvajith M S"],
//102
["Mr. Shashank Shetty"],
//103
["Dr. Anitha Marina Colaco"],
//104
["yet to be updated"],
//105
["Dr. Venkatesh Kamath"],
//106
["Dr. Sharanya P"],
//107
["Mr. Shashank Shetty"],
//108
["Ms. Bhavya D"],
//109
["Dr.Ramesh Bhat"],
//110
["Ms.Shruthi M"],
//111
["Ms.Palimaru Aparna"],
//112
["to be updated later"],
//113
["Dr.Santhosh Poojary"],
//114
["Ms.Deekshitha K"],
//115
["Dr.Ramesh Bhat and Ms.Shruthi M"],
//116
["Ms.Bhavya D"],
//117
["Dr.Shivaprasad Shetty"],
//118
["Ms.shruthi M"],
//119
["Dr.Krishna Rao"],
//120
["to be notified later"],
//121
["Dr.Sneha Nayak"],
//122
["Mr.Prithviraj H K"],
//123
["Ms.Bhavya D"],
//124
["Ms.Bhavya K"],  
//125
["Dr. Raghavendra Bairy"],
//126
["Dr.Bhojaraja B E"],
//127
["Ms.Harshitha Bhat"],
//128
["Kathik"],
//129
["Dr. Joy Elvine Martis"],
//130
["Dr. Jnaneshwar Pai Maroor"],
//131
["Dr.Bhojaraja B E and Ms.Harshitha Bhat"],
//132
["Dr. Vasanth K R"],
//133
["Dr. Shyam Prasad K"],
//134
["Pradeep Kamath"],
//135
["Dr. Mamatha Girish"],
//136
["to be notified later"],
//137
["Dr. Vishwanath"],
//138
["Swetha Bharath"],
//139
["Dr. Shyam Prasad K and Pradeep Kamath"],
//140
["Anjana Pai"],
//141
["Dr. Nagaraj B S"],
//142
["Dr. Mithun B M"],
//143
["Dr. Krishnananda Shet"],
//144
["to be notified later"],
//145
["Srinivas Nekkar"],
//146
["Swetha Bharath"],
//147
["Anjana Pai and Srinivas Nekkar"],
//148
["Sharad M Hegde"],
//149
["Dr. Shobha Prabhu and Dr.Manjunatha K B"],
//150
["Thanushree Hegde"],
//151
["Shankari N"],
//152
["to be notified later"],
//153
["Dr. Joy Elvine Martis"],
//154
["Sonia Lobo"],
//155
["Sharad M Hegde and Shankari N"], 
//156
["Ms.Chaithra K"],
//157
["Dr.Janardhan NAyak"],
//158
["Ms.Shilpa M K"],
//159
["Dr.Latha Shenoy"],
//160
["to be notified later"],
//161
["Dr.Sneha Nayak"],
//162
["Dr.Sharanya P"],
//163
["Ms.Chaithra K and Ms.Shilpa M K"],
//164
["Ms.Chaithra k"],
//165
["Dr.Janardhan Nayak"],
//166
["Dr.Pradeep Kanchan"],
//167
["Mr.Naveen J"],
//168
["to be notified later"],
//169
["Dr.Louella C Goveas"],
//170
["Ms.Deekshitha K"],
//171
["Dr.Janardhan Nayak and Mr.Naveen J"],
//172
["if you are shreyas then you are my creator or you are my friend"]

];

const alternative = [

  "Try again",
  "go on...",
  
 
];
const  FirstyearCoordinator = ["DR.JOY E MARTIS"];
const  ASectionMathsTeacher = ["ABCD"];
