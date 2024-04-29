var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "meta_frontmatter-2",
  "level": "1",
  "url": "meta_frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " copyright  "
},
{
  "id": "s_sets_functions",
  "level": "1",
  "url": "s_sets_functions.html",
  "type": "Section",
  "number": "0.1",
  "title": "Sets and functions",
  "body": " Sets and functions    We gather here some notions about sets and functions.    Sets   sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .    We use curly braces to describe the contents of a set. For example, is the set containing the first three positive integers, and is the set of all positive integers. The defining property of sets is that they are completely determined by their members, and nothing more. In particular, when describing sets as above, it does not matter in what order the elements are listed, nor if they are repeated: , , , and are three descriptions of the same set. This somewhat slippery notion is made perfectly clear by specifying exactly what it means for two sets to be equal, as we do below.   Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .    Set membership naturally extends to a notion of one set lying within another.   Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .      The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.    With the fundamental notions of membership, equality, and subset in place, we now introduce means of building new sets from existing ones. The first is a manner of carving out a subset of a given set using a specified property.   Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .      Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .      Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .    Next we use set builder notation, the set membership relation, and some basic logic to define the union, intersection, and difference of sets.   Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .      With the help of these set operations, we can now describe some common sets used in mathematics.   sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .    The power set of a set is the set of all subsets of .   power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .     Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .    Lastly, we define the cartesian product of sets, which is a formal description of an ordered collection of objects.   Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .      We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.      Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.    The notion of a Cartesian product can be generalized to an infinite list of sets , and indeed to any collection indexed by a set .   tuple arbitrary    -tuple   I-tuple   Let and be sets. An -tuple with entries (or coordinates) in is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .     Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples with coordinates in whose -th coordinate is an element of for all .  In the special case where for all , we denote as .      Functions   Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .      Consider the function . This function has domain and codomain equal to and maps an integer to its square.     Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function       Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .    As with sets and tuples, we are obliged to specify what we mean for two functions to be equal. The definition below makes clear how the the domain and codomain, as well as the rule that takes inputs to outputs, are all essential ingredients of a function.   Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .        Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .     Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .     Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.        Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.     Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .     function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .    Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.       Cardinality and countability   Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.       "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_sets",
  "type": "Definition",
  "number": "0.1.1",
  "title": "Sets.",
  "body": " sets  sets empty sets  sets membership      set membership   Sets   A set is a collection of objects. An object is a member (or element ) of a set if contains . In this case, we write . If is not a member of , we write .   "
},
{
  "id": "d_set_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_set_equality",
  "type": "Definition",
  "number": "0.1.2",
  "title": "Set equality.",
  "body": " Set equality  sets equality   Sets and are equal , denoted , if they have precisely the same elements: , if for any object , we have if and only if .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_sets_functions.html#d_set_inclusion",
  "type": "Definition",
  "number": "0.1.3",
  "title": "Set inclusion (subsets).",
  "body": " Set inclusion (subsets)  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .   "
},
{
  "id": "rm_equal_subset_logic",
  "level": "2",
  "url": "s_sets_functions.html#rm_equal_subset_logic",
  "type": "Remark",
  "number": "0.1.4",
  "title": "",
  "body": "  The definitions of set equality and the subset relation make use of two important logical operations: namely, the if and only if (or iff for short) and if-then operations.   "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_sets_functions.html#d_set_builder_notation",
  "type": "Definition",
  "number": "0.1.5",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
},
{
  "id": "rm_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#rm_set_builder",
  "type": "Remark",
  "number": "0.1.6",
  "title": "",
  "body": "  Set builder notation is parsed from left to right as follows:    is read as the set of      is read as elements of      is read as such that      is read as is true .   Taken altogether we get: The set of elements of such that is true .   "
},
{
  "id": "ex_set_builder",
  "level": "2",
  "url": "s_sets_functions.html#ex_set_builder",
  "type": "Example",
  "number": "0.1.7",
  "title": "",
  "body": "  Let be the set of nonnegative integers. The subset of even positive integers can be described using set-builder notation as , or alternatively, .   "
},
{
  "id": "d_set_operations",
  "level": "2",
  "url": "s_sets_functions.html#d_set_operations",
  "type": "Definition",
  "number": "0.1.8",
  "title": "Union, intersection, difference, and complement.",
  "body": " Union, intersection, difference, and complement  sets union  sets intersection    set union     set intersection   sets complement  sets difference      set difference     set complement    Let and be subsets of a common set .    Set union  The union  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the union  of this collection is defined as .    Set intersection  The intersection  of and is defined as . More generally, if is a set and is a collection of sets indexed by , then the intersection  of this collection is defined as     Set difference  The difference  is defined as .    Set complement  The complement of in is defined as . In contexts where there is clear what the larger set is, we denote the complement of in as .     "
},
{
  "id": "d_common_sets",
  "level": "2",
  "url": "s_sets_functions.html#d_common_sets",
  "type": "Definition",
  "number": "0.1.9",
  "title": "Common mathematical sets.",
  "body": " sets empty set     the empty set   real numbers    real numbers   integers    integers     positive integers   rational numbers    rational numbers   Common mathematical sets   We denote by the set of all real numbers. The integers  and rational numbers  are the subsets of defined as . This yields the following chain of subsets: . The empty set is the set containing no objects, denoted or .  The set of all positive integers is denoted .   "
},
{
  "id": "d_power_set",
  "level": "2",
  "url": "s_sets_functions.html#d_power_set",
  "type": "Definition",
  "number": "0.1.10",
  "title": "Power set.",
  "body": " power set    power set of   Power set   Given a set , its power set  is defined as the set of all subsets of .   "
},
{
  "id": "eg_power_set",
  "level": "2",
  "url": "s_sets_functions.html#eg_power_set",
  "type": "Example",
  "number": "0.1.11",
  "title": "Power set.",
  "body": " Power set   Let . The power set is the set of all subsets of . We can enumerate systematically by listing all the subsets in order of increasing cardinality. There is one subset of containing zero elements: namely, the empty set . The two subsets of containing exactly one element are and . Lastly, the unique subset of containing two elements is itself. We conclude that . In general if has cardinality , then has cardinality .   "
},
{
  "id": "d_cartesian_product",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product",
  "type": "Definition",
  "number": "0.1.12",
  "title": "Cartesian product (finite).",
  "body": " Cartesian product finite      Cartesian product   Cartesian product (finite)   An -tuple (or sequence ) of the sets is an ordered list such that for all . We define two -tuples , and to be equal, denoted , if for all . We call the length of the sequence , and we call its -th entry for all .  The (Cartesian) product of the sets , denoted or , is the set of all -tuples: , .  Given a set , its -ary Cartesian product  is defined as .   "
},
{
  "id": "rm_pairs_triples",
  "level": "2",
  "url": "s_sets_functions.html#rm_pairs_triples",
  "type": "Remark",
  "number": "0.1.13",
  "title": "",
  "body": "  We have more suggestive names for -tuples when is small: a 2-tuple is called a pair, a 3-tuple is called a triple, a 4-tuple is called a quadruple, . We will use the generic term tuple to designate a -tuple of unspecified length.   "
},
{
  "id": "rm_tuple_ordered",
  "level": "2",
  "url": "s_sets_functions.html#rm_tuple_ordered",
  "type": "Remark",
  "number": "0.1.14",
  "title": "",
  "body": "  Observe how tuples capture the notion of an ordered collection of object. For example, whereas the sets and are all equal to one another, the 4-tuples and are not: they differ in their second entries.  What about the tuples and ? Are these equal? Technically our definition of equality only applies to tuples living in the same fixed Cartesian product. In particular, for the question of equality to make sense, the tuples must have the same length. As such we will officially avoid writing things like , although unofficially we consider these two objects as completely different. You should think of and as creatures living on two different planets in the universe of tuples.   "
},
{
  "id": "d_Ituple",
  "level": "2",
  "url": "s_sets_functions.html#d_Ituple",
  "type": "Definition",
  "number": "0.1.15",
  "title": "I-tuple.",
  "body": " tuple arbitrary    -tuple   I-tuple   Let and be sets. An -tuple with entries (or coordinates) in is a function . Given an -tuple and element we will often denote the value as , and denote itself as . In analogy to finite tuples, we call the -th entry or coordinate of .   "
},
{
  "id": "d_cartesian_product_arbitrary",
  "level": "2",
  "url": "s_sets_functions.html#d_cartesian_product_arbitrary",
  "type": "Definition",
  "number": "0.1.16",
  "title": "Cartesian product (arbitrary).",
  "body": " Cartesian product arbitrary    Cartesian product of the sets   Cartesian product (arbitrary)   Let be a set, and let be a collection of subsets indexed by the set . The Cartesian product  of this collection is defined as . In other words, the Cartesian product is the set of all -tuples with coordinates in whose -th coordinate is an element of for all .  In the special case where for all , we denote as .   "
},
{
  "id": "d_function",
  "level": "2",
  "url": "s_sets_functions.html#d_function",
  "type": "Definition",
  "number": "0.1.17",
  "title": "Functions.",
  "body": " Functions  function    a function from to    Let and be two sets. A function from to , denoted , is a rule which, given any input  , returns an output  . In this case we write and call the image of under , or the value of at  . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of .  When we wish to indicate what rule defines the function, we use the elaborated notation . This is read as The function with domain and codomain maps an input to the output .   "
},
{
  "id": "ss_functions-3",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-3",
  "type": "Example",
  "number": "0.1.18",
  "title": "",
  "body": "  Consider the function . This function has domain and codomain equal to and maps an integer to its square.   "
},
{
  "id": "ss_functions-4",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-4",
  "type": "Example",
  "number": "0.1.19",
  "title": "Arithmetic operations as functions.",
  "body": " Arithmetic operations as functions   Our familiar arithmetic operations can be expressed as functions whose inputs are pairs of numbers: addition is the function and multiplication is the function    "
},
{
  "id": "rm_function_as_relation",
  "level": "2",
  "url": "s_sets_functions.html#rm_function_as_relation",
  "type": "Remark",
  "number": "0.1.20",
  "title": "",
  "body": "  Invoking the notion of a rule in the definition of a function is admittedly somewhat vague. A more precise definition can be given using the Cartesian product. Namely, given sets and , we define a function to be a subset satisfying the following property: for all there is a unique element . The uniqueness of the pair then allows us to define the value of at as , denoted .   "
},
{
  "id": "d_function_equality",
  "level": "2",
  "url": "s_sets_functions.html#d_function_equality",
  "type": "Definition",
  "number": "0.1.21",
  "title": "Function equality.",
  "body": " Function equality  function equality   Functions and are equal if   they have the same domain and codomain , and    for all , we have .      "
},
{
  "id": "d_image",
  "level": "2",
  "url": "s_sets_functions.html#d_image",
  "type": "Definition",
  "number": "0.1.22",
  "title": "Image of a set.",
  "body": " Image of a set  function image of a set  function image    image of the set under     image of a function    Given a function and a subset , the image of under , denoted , is defined as . In other words, is the set of all outputs , where .  The image of , denoted , is the set of all outputs of : , .   "
},
{
  "id": "d_preimage_of_set",
  "level": "2",
  "url": "s_sets_functions.html#d_preimage_of_set",
  "type": "Definition",
  "number": "0.1.23",
  "title": "Preimage of set.",
  "body": " Preimage of set  preimage of a set    preimage of under    Given a function , the preimage of a subset is the subset defined as . In plain English: the preimage of under is the set of all whose image under lies in .   "
},
{
  "id": "d_injective_surjective_bijective",
  "level": "2",
  "url": "s_sets_functions.html#d_injective_surjective_bijective",
  "type": "Definition",
  "number": "0.1.24",
  "title": "Injective, surjective, bijective.",
  "body": " Injective, surjective, bijective  invertible function  bijective function  injective function  surjective function  one-to-one function  onto function  one-to-one correspondence   Let be a function.   The function is injective (or one-to-one ) if for all , if , then : equivalently, if , then .    The function is surjective (or onto ) if for all , there is an such that : equivalently, .    The function is bijective (or a one-to-one correspondence ) if it is injective and surjective.      "
},
{
  "id": "ss_functions-11",
  "level": "2",
  "url": "s_sets_functions.html#ss_functions-11",
  "type": "Example",
  "number": "0.1.25",
  "title": "Role of domain and codomain in injectivity and surjectivity.",
  "body": " Role of domain and codomain in injectivity and surjectivity   Consider the following three functions . Although all three functions are defined using the same rule ( ), they are not equal thanks to their differing domains and\/or codomains. The choice of domain and codomain in these examples also plays a crucial role in determining whether the function is injective and\/or surjective. The function is neither injective ( ) nor surjective ( ); the function is injective but not surjective; the function is both injective and surjective, hence bijective.   "
},
{
  "id": "d_function_composition",
  "level": "2",
  "url": "s_sets_functions.html#d_function_composition",
  "type": "Definition",
  "number": "0.1.26",
  "title": "Function composition.",
  "body": " Function composition  function composition    the composition of and    Suppose and are functions satisfying . The composition of and is the function defined as , for all .   "
},
{
  "id": "d_invertible_function",
  "level": "2",
  "url": "s_sets_functions.html#d_invertible_function",
  "type": "Definition",
  "number": "0.1.27",
  "title": "Identity and inverse functions.",
  "body": " function invertible  function inverse  function identity  Identity and inverse functions   For any set the identity function on is the function defined as for all .  A function is invertible if there is a function satisfying and : , . The function in this case is called the inverse of , denoted .  "
},
{
  "id": "th_invertible_bijective",
  "level": "2",
  "url": "s_sets_functions.html#th_invertible_bijective",
  "type": "Theorem",
  "number": "0.1.28",
  "title": "Invertible is equivalent to bijective.",
  "body": " Invertible is equivalent to bijective   A function is invertible if and only if it is bijective.   "
},
{
  "id": "d_cardinality",
  "level": "2",
  "url": "s_sets_functions.html#d_cardinality",
  "type": "Definition",
  "number": "0.1.29",
  "title": "Cardinality.",
  "body": " Cardinality  cardinality  finite set  infinite set  countably infinite set  countable set  uncountable set    cardinality of set    Let be a set.    Finite and infinite sets  The set is finite if either or there is a bijection for some positive integer . Roughly speaking, the cardinality of a finite set , denoted , is the number of distinct elements it contains. In more detail if , then by definition; if there is a bijection , then .  The set is infinite if it is not finite. In this case is said to have infinite cardinality .    Countable and uncountable sets  The set is countably infinite if there is a bijection , where is the set of all positive integers; it is countable if it is either finite or countable infinite.  The set is uncountable if it is not countable.     "
},
{
  "id": "s_logic",
  "level": "1",
  "url": "s_logic.html",
  "type": "Section",
  "number": "0.2",
  "title": "Logic",
  "body": " Logic   When dealing with mathematical statements and arguments, we must pay close attention to logical structure. This section introduces both logical connectors and quantifiers, and carefully describes how to determine the truth values of propositions built from these operations.    Propositional logic  A proposition is a sentence that is either true or false. We build compound propositions from component propositions using logical operators (or logical connectors ); the truth value of the compound proposition is defined as a function of the truth values of the component propositions.   Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.         A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:       Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )      Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.      Predicate logic  Propositions like All humans are mortal and Every positive real number has a square-root are modeled in logic in the form For all , and For all , there exists an such that , where stands for the phrase is mortal and stands for the phrase is a square-root of . Observe that and on their own are not propositions; there is no truth value to is mortal or is a square-root of . Instead, we think of and as functions which return propositions when evaluated at a specific choice for , or for and . For example, evaluating at yields the proposition Aaron Greicius is mortal , which happens to be true at the time of writing. Similarly evaluating at yields the proposition is a square-root of 2 , which happens to be false. In logic and are called propositional functions (also called predicates ): functions whose outputs are propositions.  The propositions For all , and For all , there exists an such that are obtained from and by bounding them with a series of quantifiers ( , for all , there exists an ). The definition below allows us to assign truth values to such propositions.    Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .       Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.     Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.     Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.     Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.     The example below taken from calculus nicely illustrates how to negate a proposition that involves a sequence of quantifiers.   The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!     "
},
{
  "id": "d_logical_ops",
  "level": "2",
  "url": "s_logic.html#d_logical_ops",
  "type": "Definition",
  "number": "0.2.1",
  "title": "Logical operators.",
  "body": " Logical operators      Negation  Given a proposition , the negation of is the proposition Not , denoted in logical notation, the truth value of which is defined as follows: is true exactly when is false.    Conjunction (logical and)  Given propositions and , their conjuction is the proposition and , denoted in logical notation, the truth value of which is defined as follows: is true when both and are true, and false otherwise.    Disjunction (logical or)  Given propositions and , their disjunction is the proposition or , denoted in logical notation, the truth value of which is defined as follows: is true when at least one of and is true, and false otherwise.    Logical implication (if-then)  Given propositions and , the proposition If , then , denoted in logical notation, is called an implication , and its truth value is defined as follows: is false when is true and is false, and true otherwise.    Logical equivalence (if and only if)  Given propositions and , the proposition if and only if , denoted in logical notation, is called an equivalence , and its truth value is defined as follows: is true when and have the same truth value, and false otherwise. We say and are logically equivalent when is true.      "
},
{
  "id": "rm_truth_tables",
  "level": "2",
  "url": "s_logic.html#rm_truth_tables",
  "type": "Remark",
  "number": "0.2.2",
  "title": "",
  "body": "  A truth table of a compound proposition is a concise way of displaying how the truth value of depends on the truth values of its component propositions. It contains one row for each possible truth assignment of the component propositions. As illustration, we give the truth tables for the logical operators defined above:    "
},
{
  "id": "ss_propositional_calculus-5",
  "level": "2",
  "url": "s_logic.html#ss_propositional_calculus-5",
  "type": "Example",
  "number": "0.2.3",
  "title": "",
  "body": "  Use a truth table to find all truth value assignments of and making the compound proposition false.    We construct a truth table with columns for , , , , and : . We conclude that is false exactly when is false and is true. (It follows that is equivalent to . )   "
},
{
  "id": "rm_logic_vs_vernacular",
  "level": "2",
  "url": "s_logic.html#rm_logic_vs_vernacular",
  "type": "Remark",
  "number": "0.2.4",
  "title": "",
  "body": "  Our definitions of the logical operators above are chosen to agree with their usage in a very particular type of discourse: namely, mathematical discourse. They do not always agree with their use in natural language: hence the modifier logical in their titles.  For example, disjunctions in natural language of the form or are often understood to be true when is true or is true, but not both . This notion of disjunction is called the exclusive or in logic, in contrast to the standard logical or.  Similarly, according to our definition, the implication If the President of the US is a dog, then the Vice President of the US is a cat is true, since the proposition The President of the US is a dog is false. (In logic we say the implication is vacuously true in this case.) However, working outside of our logical definitions of truth value, we may have been inclined to treat this implication as false, since both The President of the US is a dog and The Vice President of the US is a cat are false.   "
},
{
  "id": "d_quantifiers",
  "level": "2",
  "url": "s_logic.html#d_quantifiers",
  "type": "Definition",
  "number": "0.2.5",
  "title": "",
  "body": "  Let be a set, and let be a propositional function that assigns to all elements the proposition . The set is called the domain of discourse of .    Universal quantifier  The proposition For all in , , denoted in logical notation, is called a universal quantification , and its truth value is defined as follows: is true if for all elements of , the proposition is true; it is false if there is some such that is false.    Existential quantifier  The proposition There exists an in such that , denoted in logical notation, is called an existential quantification , and its truth value is defined as follows: is true if there is some element of for which the proposition is true; it is false if is false for all .     "
},
{
  "id": "rm_domain_discourse",
  "level": "2",
  "url": "s_logic.html#rm_domain_discourse",
  "type": "Remark",
  "number": "0.2.6",
  "title": "Truth depends on domain of discourse.",
  "body": " Truth depends on domain of discourse   Just as a function is not properly defined before its domain is specified, we do not have a well-defined propositional function, nor well-defined truth values of propositions built from this propositional function, until its domain of discourse is given.  For example, let be x>0 . If we declare , then the proposition is true, since by definition every is positive. On the other hand, if we declare , the proposition is false since not all elements of are positive: indeed, is negative, making false.  Because of the important role played by the domain of discourse , we sometimes include it in our quantifier expressions: , , . Using this convention allows us to see more immediately that is true and is false.   "
},
{
  "id": "ex_model_quant",
  "level": "2",
  "url": "s_logic.html#ex_model_quant",
  "type": "Example",
  "number": "0.2.7",
  "title": "Modeling “Every positive number has a square-root”.",
  "body": " Modeling Every positive number has a square-root   Model the sentence Every positive real number has a square-root in the form , where is a propositional function with domain of discourse . Determine the truth value of using .    Fix our domain of discourse to be . For any , let be the proposition that is a square-root of . Define to be the propositional function . Thus for any , is the proposition that if is positive, then has a square-root. It follows that is the proposition that for all real numbers , if is positive, then has a square-root. This is clearly equivalent to the proposition that every positive real number has a square-root, as desired.  Lastly, we use to show is true. Take any . The real number is either positive or not positive. If is not positive, then is false and hence , which is the implication , is true vacuously. If is positive, then is true, and is true, since has a square-root in this case: namely, . But if is true and is true, then the implication is true. We have proved is true for all . Thus is true.   "
},
{
  "id": "warning_order_quantifiers",
  "level": "2",
  "url": "s_logic.html#warning_order_quantifiers",
  "type": "Warning",
  "number": "0.2.8",
  "title": "Order of quantifiers matters.",
  "body": " Order of quantifiers matters   As illustrates, we can take a propositional function in two variables and quantify one of the two variables to obtain a propositional function in one variable: , or . Proceeding in this manner we engender propositions involving sequences of quantifiers. Mark well that the order of the quantifiers in such sequences is important!  For example, letting be is a square-root of with domain of discourse . The proposition says that every positive real number has a positive square-root (true); the proposition says that there is a positive real number that is the square-root of all real numbers (false).  In general to unpack a sequence of quantifiers we start from the leftmost quantifier and proceed to the right.   "
},
{
  "id": "rm_negating_quantifiers",
  "level": "2",
  "url": "s_logic.html#rm_negating_quantifiers",
  "type": "Remark",
  "number": "0.2.9",
  "title": "Negating quantifiers.",
  "body": " Negating quantifiers   Let be a propositional function with domain of discourse . According to a universal quantification is false if it is not the case that is true for all for all ; that is, if there is some such that is false. Letting be the propositional function defined as for all , we see that is false if and only if is true. This proves the equivalence . Similarly, we have . These equivalences can be understood as rules of negating quantifier statements. They can be summarized as follow: swap quantifiers and negate the predicate.    "
},
{
  "id": "ex_limit_doesnt_exist",
  "level": "2",
  "url": "s_logic.html#ex_limit_doesnt_exist",
  "type": "Example",
  "number": "0.2.10",
  "title": "The limit does not exist.",
  "body": " The limit does not exist   Let be a function with domain , and let be a point of this domain. By definition, the proposition that exists is equivalent to the following proposition: . (We made a number of shortcuts in our logical notation above (  , ) in order to simplify the expression somewhat; the intended meaning should still be clear. )  Use the negation rules described in to derive a similar proposition equivalent to the statement that do not exist.    Let be the proposition in . Using the negation rules in series, we derive the chain of equivalences below. We've added parentheses to emphasize what is being negated at each step. Note how a quantifiers are swapped each time we pass the negation to the right. . (The last link in our chain uses the fact that is equivalent to , as a truth table easily shows.) Translating back into English, we conclude that the limit not existing ( ) is equivalent to the following: for every there is an such that for all there exists an satisfying and . Quite a mouthful!   "
},
{
  "id": "s_proof_technique",
  "level": "1",
  "url": "s_proof_technique.html",
  "type": "Section",
  "number": "0.3",
  "title": "Proof techniques",
  "body": " Proof techniques  Proof writing is an art, a technical skill you will hone and refine throughout your career; and like any art, proof writing has many tricks of the trade. We gather a few here in the form of a collection of general proof techniques. Part of mastering these techniques involves understanding the circumstances where they can be of use. When selecting a technique, we are guided in part by the logical structure and particular mathematical content of the proposition under consideration. The proof techniques below are organized under this guiding principle.   Logical structure   Implication  By the only time an implication is false is when is true and is false. Accordingly, the direct approach to proving an implication is to assume is true, and use this assumption to prove is true.  A common indirect approach used to prove an implication is to prove its contrapositive  , which is logically equivalent to the original implication. In this case we assume is not true, and show is not true. (Exercise: use a truth table to show the contrapositive is logically equivalent to the original implication.)    The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )      Disjunction  Again, using , to directly show a disjunction is true, we need only show one the two component propositions is true.  Alternatively, we can prove either of the implications or , both of which are logically equivalent to . (Exercise: use a truth table to show these three propositions are indeed equivalent!)    Equivalence The equivalence is logically equivalent to the conjunction . Accordingly, the standard way of proving is to prove the two implications and separately. (Exercise: use a truth table to show these propositions are indeed equivalent!)   Chains of implications\/equivalences  The relation implies is transitive: , if and , then . Similarly, the relation is equivalent to is transitive. This allows us to prove an implication or equivalence via a chain of implications or chain of equivalences . When writing up a proof using this technique, use a vertically aligned format like the example below, treating one implication or equivalence per line, and adding a brief justification to the right: . It is also possible to build an argument as a hybrid chain of equivalences and implications. In this case the chain is only as strong as its weakest link. For example, a chain of the form only shows that . Indeed, we will have if and only if the intervening implication is in fact an equivalence ( , the arrow goes both ways).    It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.    The example below provides the proof that a function is invertible if and only if it is bijective ( ). The proof nicely illustrates some of the different techniques used for proving implications and equivalences. Additionally, it is a nice example of how to separate out cases of the argument into clearly distinguished steps.   Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .        Proof by contradiction The technique of proof by contradiction (or reductio ad absurdum ) proves a proposition by (a) assuming the negation is true, and then (b) using this assumption to derive a proposition known to be false. The choice of falsehood is completely up to the person providing the proof. However, in order for the proof to be convincing, it should be clear, either logically or because of theory assumed to be known, that is indeed false.  Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .      Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.       Equalities   Equality is not as simple as it may seem. In general an equality is a mathematical statement of the form . Here LHS and RHS stand for left- and right-hand side, respectively. What exactly such an equality means depends very much on what kind of mathematical objects the two sides of the equation are: , numbers, sets, functions, etc. Below we discuss equality for objects of a particular type in detail. (See and .) In all settings, the notion of equality will be transitive : , if and , then . We use transitivity implicitly when proving an equality via a chain of equalities as described below.    Chain of equalities Often to prove an equality as in we proceed in a sequence of intervening bite-size equalities, each of which is easy for the reader to digest. As with chains of implications\/equivalences, we present such an argument in a vertically aligned format, with brief justifications to the right: .  Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.      Basic set properties   Set inclusion  Let and be sets. By , to prove we must show that for all elements we have . This requires proving the implication above for a general element , and we may use any of the techniques described in and to do so.    Set equality  Let and be sets. To prove directly using we must show that for all elements we have . To prove this universal equivalence, we must give an argument for the equivalence that holds for a general element .  Alternatively, you can prove by proving the two set inclusions and separately. This is equivalent to proving the two implications and separately.     Basic function properties   Function equality  By , in order to show functions and are equal we must   show that and have the same domain and codomain , and    show that for all .    By The universal quantifier for all of item (ii) gives this subtask the feel of proving an identity : we must show that equality holds for all  . By the same token, to show (ii) does not hold, it suffices to show that for some .   Injective, surjective, bijective  Let be a function.   Injectivity  To show is injective, we must show that the implication holds for all . Frequently it will be convenient to prove the (universal) contrapositive: for all .  Similarly, to show is not injective, we simply have to find satisfying and .    Surjectivity  To prove is surjective, we must prove the universal quantification: . To prove is not surjective, we must prove the negation of this proposition ( ): , there exists a for which there is no with .    Bijectivity  To show is bijective directly using , we must show that is injective and surjective. This is equivalent to showing that for there exists a unique element such that .  Alternatively, using we can show that is bijective by providing an inverse function .      mathematical induction  Mathematical induction    Mathematical induction is a technique for proving universal quantifications of the form , where is a fixed starting integer, called the base , and is a predicate defined on the integers. If the setting makes clear that ranges over integers, we write such propositions using logical notation as .    mathematical induction weak induction  Proof by induction  Suppose is a predicate of integers. To prove the proposition by induction (sometimes called weak induction ), we proceed in two steps.   Base step  Show that is true.    Induction step  Prove the universal implication . In practice, if proving the implication directly, this means we assume is true (the induction hypothesis ), and use this assumption to show is true.    Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.     Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.    So why does proof by induction work? In other words, why is it a valid proof technique? Imagine our propositions as forming an infinite ladder that we wish to ascend. Cautious climbers that we are, we only will step on a rung if we know the corresponding proposition is true. Knowing is true (the base step) allows us to step onto the first rung. The universal implication (induction step) gives us a rule that says if rung is secure (i.e., true), then so is rung . Since this rule holds for all rungs (i.e., for all ), we can safely ascend the entire ladder!  Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions          mathematical induction strong induction  Proof by strong induction  Suppose is a predicate of integers. To prove the proposition by strong induction , we proceed in two steps.   Base step:  Show that is true.    Strong induction step  Prove the universal implication . This technique is called strong induction, as now the induction hypothesis is much stronger: to prove this implication directly we assume is true for all (not just as in weak induction), and use this assumption to show is true.   In fact, strong induction is, logically speaking, no stronger than weak induction. Both techniques apply to propositions of the form , and you are free to choose which form of induction to use each time. We typically use strong induction out of convenience, when the nature of the predicate is such that we can prove most elegantly by assuming , as opposed to just . The following example is characteristic in this regard.   Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.      "
},
{
  "id": "sss_implication-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_implication-4",
  "type": "Warning",
  "number": "0.3.1",
  "title": "",
  "body": "  The converse of an implication is the implication ; the inverse of is the implication . Neither the converse nor the inverse is equivalent to the original implication, and thus neither of these can be used to give an indirect proof of . (Exercise: use a truth table to show that neither the converse nor the inverse implication is logically equivalent to the original implication. )   "
},
{
  "id": "sss_logical_chains-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_logical_chains-3",
  "type": "Warning",
  "number": "0.3.2",
  "title": "",
  "body": "  It is often tempting, for the sake of space, to try and prove an equivalence via a chain of equivalences, as opposed to showing and separately. When proceeding in this manner, make doubly sure that each is indeed an equivalence: , that the implication arrow really goes both ways at each step. Even if each step in your chain truly is an equivalence, you should consider whether this will be obvious to your reader.   "
},
{
  "id": "ex_invertible_bijective",
  "level": "2",
  "url": "s_proof_technique.html#ex_invertible_bijective",
  "type": "Example",
  "number": "0.3.3",
  "title": "Proof: invertible is equivalent to bijective.",
  "body": " Proof: invertible is equivalent to bijective   Let be a function. Prove: is invertible if and only if is bijective.    Let be the proposition that is invertible, and let be the proposition that is bijective. We prove the equivalence by proving the two implications and .   Proof of  We must show that if is invertible, then is bijective. Assume is invertible. Then has an inverse . We show separately that is injective and surjective, hence bijective.   is injective  We show via a chain of implications: .    is surjective  Let be an element of . We must show that there is an such that . Letting , we have .     Proof of  We must show that if is bijective, then is invertible. Assume is bijective. First we define a function as follows: for all , let be the unique element such that . Note that our definition of uses both that is surjective (there is some element such that )) and injective (there is exactly one element such that ).  We now prove that is the inverse of , showing and separately.    Take any and let . By definition of , we have and hence . This proves .     Take any . By definition of , is the unique such that . Thus . This proves .     "
},
{
  "id": "ex_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#ex_proof_by_contradiction",
  "type": "Example",
  "number": "0.3.4",
  "title": "Proof by contradiction.",
  "body": " Proof by contradiction   Prove by contradiction that has no multiplicative inverse in the reals: , there is no such that .    We prove the claim by contradiction. Assume there is an such that . Since for any (a property of multiplication by 0), we have : a contradiction since . We conclude that there is no such that .   "
},
{
  "id": "rm_proof_by_contradiction",
  "level": "2",
  "url": "s_proof_technique.html#rm_proof_by_contradiction",
  "type": "Remark",
  "number": "0.3.5",
  "title": "",
  "body": "  Proof by contradiction resembles, but is not quite the same thing as proving an implication via its contrapositive. Letting denote an arbitrary falsehood (the described above) what we do in a proof by contradiction is show that the implication is true. Since is false, and the implication is true, must be false: equivalently, must be true.   "
},
{
  "id": "sss_chain_equalities-4",
  "level": "2",
  "url": "s_proof_technique.html#sss_chain_equalities-4",
  "type": "Warning",
  "number": "0.3.6",
  "title": "",
  "body": " Never attempt to prove an equality by starting off with the equality you wish to prove, and then deduce a series of further equalities ending in some inanity: , . What this suggests is that you are in fact proving an implication: namely, if the desired equality is true, then  . Clearly this is not what we set out to prove! This type of fallacious argument is called begging the question ( petitio princippii in Latin), as we assume that which was to be proven.  "
},
{
  "id": "ss_mathematical_induction-3-1",
  "level": "2",
  "url": "s_proof_technique.html#ss_mathematical_induction-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "base "
},
{
  "id": "sss_weak_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction weak induction "
},
{
  "id": "sss_weak_induction-5-2",
  "level": "2",
  "url": "s_proof_technique.html#sss_weak_induction-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "induction hypothesis "
},
{
  "id": "rm_induction",
  "level": "2",
  "url": "s_proof_technique.html#rm_induction",
  "type": "Remark",
  "number": "0.3.7",
  "title": "“Step 0” of induction.",
  "body": " Step 0 of induction   When meeting a proposition in the wild that we wish to prove by induction, you should first take care to model the proposition in the form . Make explicit the predicate in question, as well as the base case . We illustrate this preparatory Step 0 in the examples below.   "
},
{
  "id": "eg_weak_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_weak_induction",
  "type": "Example",
  "number": "0.3.8",
  "title": "Weak induction.",
  "body": " Weak induction   Prove the identity for all . Recall: .    We prove the proposition by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that .    Base step:  The proposition is the statement that , which is clearly true.    Induction step  We must show the universal implication . Let , and assume is true: , The proposition states that . We prove this, assuming , via a chain of equalities: , as desired.   Having completed our base and induction steps, our proof is now finished.   "
},
{
  "id": "fig_proof_induction",
  "level": "2",
  "url": "s_proof_technique.html#fig_proof_induction",
  "type": "Figure",
  "number": "0.3.9",
  "title": "Mathematical induction as ladder of propositions",
  "body": " Mathematical induction as ladder of propositions  Mathematical induction as ladder of propositions     "
},
{
  "id": "sss_strong_induction-3",
  "level": "2",
  "url": "s_proof_technique.html#sss_strong_induction-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strong induction "
},
{
  "id": "eg_strong_induction",
  "level": "2",
  "url": "s_proof_technique.html#eg_strong_induction",
  "type": "Example",
  "number": "0.3.10",
  "title": "Strong induction.",
  "body": " Strong induction   Prove that every integer can be written as a product of primes.    We prove the statement by induction.   Step 0: preparation  The proposition is modeled logically as , where is the proposition that is a product of primes.    Base step:  The proposition asserts that is a product of primes. This is true since is itself prime, hence a product of one prime number.    Strong induction step  We must show the universal implication . Let , and assume is true for all : , for all such we assume can be written as a product of primes. We use this assumption to prove : , that is a product of primes. We proceed in two cases, depending on whether is itself prime.   Case 1: is prime  If is prime, then it is trivially a product of one prime number, just as with the base case.    Case2 : is not prime  If is not prime, then we can factor nontrivially as . Here nontrivially means that we have . Using the strong induction hypothesis, we may assume that and are both products of primes: , we have , where and are prime for all and . It follows that , and hence that is also a product of primes, as desired.    Having completed the base and induction steps, our proof by induction is now finished.   "
},
{
  "id": "s_intro",
  "level": "1",
  "url": "s_intro.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to Galois theory",
  "body": " Introduction to Galois theory   Finding roots of polynomials  Given a degree-2 polynomial with coefficients in (or , or ), we may compute its roots using the quadratic formula : . The question naturally arises whether we can derive a formula of a similar nature to for the roots of polynomials of higher degree . For example, if , then the roots of can be expressed in the form . This formula, along with similar formulas for quartic polynomials, was published in Geralamo Cardano's Ars Magna in the 16th century. As such these formulas are called Cardano's formulas . However, Cardano was building off work of a number of other Italian mathematicians: , Scipione del Ferro, Niccolo Tartaglia, and Lodovico Ferrari. See The sordid past of the cubic formula for an amusing history of the attribution struggle around these results.  Comparing and , it is clear that though the second formula is quite a deal more complicated than the first, it is indeed similar in nature. Namely, the root is expressed in terms of iterated radical expressions (radicals of radicals): we say that the polynomial is solvable by radicals in this case.  So are all polynomials solvable by radicals? Although the answer is yes for any quadratic, cubic, or quartic polynomial, Niels Henrik Abel was able to show in the early 19th century that the answer is no for certain quintic (degree-5) polynomials. Around the same time Évariste Galois characterized exactly which polynomials were solvable by radicals in terms of a group of automorphisms of a certain field associated to . The theory he developed to this end, now called Galois theory , established an extremely powerful dictionary between field extensions and groups of field automorphisms. Galois's work is often heralded as the beginning of group theory itself, so in taking up Galois theory now we come wonderfully full circle.    Fields   Rings have identity   In this course all rings are assumed to have a multiplicative identity element. By default the additive identity element of is denoted (or ), and the multiplicative identity element is denoted (or ).  Furthermore, our definition of a ring homomorphism includes the condition that : , by definition a ring homomorphism must map the multiplicative identity to the multiplicative identity.     Units of a ring    group of units of ring    Let be a ring. An element is a unit (or invertible ) if there is an element satisfying . The set of all units of , denoted , is a group under the ring multiplication operation and is called the group of units of .     Field   A field is a nonzero commutative ring satisfying : , all nonzero elements of are invertible.     Ring homomorphism from field   Let be a field and let be a nonzero ring. If is a ring homomorphism, then is injective.    Since is a ring homomorphism, its kernel is an ideal in . Since is a field, its only ideals are and . Since (see ), we cannot have . Thus and is injective.     Familiar fields  We recall here some familiar fields, along with their notation.   Reals  The field of all real numbers is denoted .    Complex numbers  The complex numbers form a field under complex addition and multiplication.    Rational numbers  The rational numbers can be defined as a subfield of as follows: .    Finite field of cardinality    field of cardinality   Let be a prime integer. The quotient ring is a field, denoted .    Field of rational functions    rational functions in variables   Let be a field, and let be the ring of polynomials over in variables. We denote by the corresponding field of rational functions: , . This is the fraction field of the polynomial ring .       Finite field notation   In contrast to the official course textbook, we will denote the finite field as , and not as .     Characteristic of a ring    characteristic of a ring    We define the characteristic of a ring , denoted , as follows:   If there exists a positive integer such that , then we define to be the smallest positive integer for which this is the case.    If for all , then we define .        Field of fractions    field of fractions of   Recall that if is an integral domain, then its field of fractions  is defined formally as , where we declare if and only if , and we define addition and multiplication as follows: . The map defined as is an injective ring homomorphism, and we often identify with its isomorphic image in , allowing us to think of as a subring of . When we make this identification, we identify the map with the inclusion map.    Universal mapping property of   Let be an integral domain, and let be the ring homomorphism defined as . If is an injective ring homomorphism, then there is a unique injective ring homomorphism satisfying . In fact, the map is defined as . This property is nicely summarized by the diagram below.  Universal mapping property of fraction field       This is a result covered in the ring theory section of the course.     Universal mapping property of  When we identify with its isomorphic image in , and thus think of as a subring of , takes the following form: if is a field, then any injective homomorphism  extends uniquely to an injective homomorphism .    "
},
{
  "id": "fiat_rings",
  "level": "2",
  "url": "s_intro.html#fiat_rings",
  "type": "Fiat",
  "number": "1.1.1",
  "title": "Rings have identity.",
  "body": " Rings have identity   In this course all rings are assumed to have a multiplicative identity element. By default the additive identity element of is denoted (or ), and the multiplicative identity element is denoted (or ).  Furthermore, our definition of a ring homomorphism includes the condition that : , by definition a ring homomorphism must map the multiplicative identity to the multiplicative identity.   "
},
{
  "id": "d_units",
  "level": "2",
  "url": "s_intro.html#d_units",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Units of a ring.",
  "body": " Units of a ring    group of units of ring    Let be a ring. An element is a unit (or invertible ) if there is an element satisfying . The set of all units of , denoted , is a group under the ring multiplication operation and is called the group of units of .   "
},
{
  "id": "d_field",
  "level": "2",
  "url": "s_intro.html#d_field",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Field.",
  "body": " Field   A field is a nonzero commutative ring satisfying : , all nonzero elements of are invertible.   "
},
{
  "id": "th_field_homomorphism",
  "level": "2",
  "url": "s_intro.html#th_field_homomorphism",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Ring homomorphism from field.",
  "body": " Ring homomorphism from field   Let be a field and let be a nonzero ring. If is a ring homomorphism, then is injective.    Since is a ring homomorphism, its kernel is an ideal in . Since is a field, its only ideals are and . Since (see ), we cannot have . Thus and is injective.   "
},
{
  "id": "ss_field_extensions-6",
  "level": "2",
  "url": "s_intro.html#ss_field_extensions-6",
  "type": "Example",
  "number": "1.1.5",
  "title": "Familiar fields.",
  "body": " Familiar fields  We recall here some familiar fields, along with their notation.   Reals  The field of all real numbers is denoted .    Complex numbers  The complex numbers form a field under complex addition and multiplication.    Rational numbers  The rational numbers can be defined as a subfield of as follows: .    Finite field of cardinality    field of cardinality   Let be a prime integer. The quotient ring is a field, denoted .    Field of rational functions    rational functions in variables   Let be a field, and let be the ring of polynomials over in variables. We denote by the corresponding field of rational functions: , . This is the fraction field of the polynomial ring .     "
},
{
  "id": "fiat_finite_field",
  "level": "2",
  "url": "s_intro.html#fiat_finite_field",
  "type": "Fiat",
  "number": "1.1.6",
  "title": "Finite field notation.",
  "body": " Finite field notation   In contrast to the official course textbook, we will denote the finite field as , and not as .   "
},
{
  "id": "d_ring_characteristic",
  "level": "2",
  "url": "s_intro.html#d_ring_characteristic",
  "type": "Definition",
  "number": "1.1.7",
  "title": "Characteristic of a ring.",
  "body": " Characteristic of a ring    characteristic of a ring    We define the characteristic of a ring , denoted , as follows:   If there exists a positive integer such that , then we define to be the smallest positive integer for which this is the case.    If for all , then we define .      "
},
{
  "id": "rm_frac_R",
  "level": "2",
  "url": "s_intro.html#rm_frac_R",
  "type": "Remark",
  "number": "1.1.8",
  "title": "Field of fractions.",
  "body": " Field of fractions    field of fractions of   Recall that if is an integral domain, then its field of fractions  is defined formally as , where we declare if and only if , and we define addition and multiplication as follows: . The map defined as is an injective ring homomorphism, and we often identify with its isomorphic image in , allowing us to think of as a subring of . When we make this identification, we identify the map with the inclusion map.  "
},
{
  "id": "th_frac_field_universal",
  "level": "2",
  "url": "s_intro.html#th_frac_field_universal",
  "type": "Theorem",
  "number": "1.1.9",
  "title": "Universal mapping property of <span class=\"process-math\">\\(\\Frac R\\)<\/span>.",
  "body": " Universal mapping property of   Let be an integral domain, and let be the ring homomorphism defined as . If is an injective ring homomorphism, then there is a unique injective ring homomorphism satisfying . In fact, the map is defined as . This property is nicely summarized by the diagram below.  Universal mapping property of fraction field       This is a result covered in the ring theory section of the course.   "
},
{
  "id": "ss_field_extensions-11",
  "level": "2",
  "url": "s_intro.html#ss_field_extensions-11",
  "type": "Remark",
  "number": "1.1.10",
  "title": "Universal mapping property of <span class=\"process-math\">\\(\\Frac R\\)<\/span>.",
  "body": " Universal mapping property of  When we identify with its isomorphic image in , and thus think of as a subring of , takes the following form: if is a field, then any injective homomorphism  extends uniquely to an injective homomorphism .  "
},
{
  "id": "s_field_extension",
  "level": "1",
  "url": "s_field_extension.html",
  "type": "Section",
  "number": "1.2",
  "title": "Field extension",
  "body": " Field extension   Field extensions   Subfield and field extension    field extension    A field extension is a pair of fields such that is a subring of . We say is a subfield of in this case, and that is an extension of , and denote this relation as .  As alternative notation to we will also write , and more graphically,   Field extension notation    to indicate that is a field extension of .     Towers and subextensions   A tower of fields is a chain of one or more field extensions . Similar notational conventions as in apply to towers of fields.  Given a tower of fields , we call an intermediate field of the field extension , and we call a subextension of .     Tower of fields  The rational, real, and complex comprise a familiar tower of fields .    Prime subfield   Let be a field. The prime subfield of is the subfield defined as the intersection of all subfields of : , .     Prime subfields and characteristic   Let be a field, and let be its prime subfield.   We have or , where is a prime integer.    If , then .    If , then .       Let be defined as . (Recall that there is a unique ring homomorphism from to any other ring.) Since is a subring of , it is an integral domain; since , we see that is a prime ideal of . It follows that or , where is a prime integer.   If , then is injective, and thus for all positive integers . We see that in this case.  If , then is the smallest positive element of , from which it follows that is the smallest positive integer satisfying . We see that in this case.    If , then from the analysis above we see that is injective. Using , since , we see that extends to an injective map , defined as . Its image is a subfield of isomorphic to . We claim that is in fact the prime subfield of . Indeed, any subfield must contain , and hence for all ; since also contains inverses of all nonzero elements, it also contains elements of the form , , and hence all elements of the form , . It follows from that , as desired.    Assume . In this case and . Thus is a subfield of isomorphic to . It is easy to see that in fact is the prime subfield of , since any subfield contains , and hence also .        Generated field    field generated over by    Given a field extension and a subset the field generated over by , denoted , is defined as . Equivalently, is the smallest subfield of containing the set and : that is, if and , then .  When (resp., ), we denote as (resp. ).     Generated field   Given an extension and subset , to prove , proceed as follows:   contains and  Show that is a subfield of containing and .    is the smallest such field  Show that for any subfield of containing and , we have .        Field generated by element   Consider the extension . Show that .    Let . We follow to show .   We have seen earlier that is a subfield of , and clearly it contains and .    Suppose is a subfield of containing and . We must show that . Take any . Since by definition , and since by assumption contains and , we have . Since is a subring of , and hence closed under addition and multiplication, we have , as desired.        "
},
{
  "id": "d_field_extension",
  "level": "2",
  "url": "s_field_extension.html#d_field_extension",
  "type": "Definition",
  "number": "1.2.1",
  "title": "Subfield and field extension.",
  "body": " Subfield and field extension    field extension    A field extension is a pair of fields such that is a subring of . We say is a subfield of in this case, and that is an extension of , and denote this relation as .  As alternative notation to we will also write , and more graphically,   Field extension notation    to indicate that is a field extension of .   "
},
{
  "id": "d_field_tower",
  "level": "2",
  "url": "s_field_extension.html#d_field_tower",
  "type": "Definition",
  "number": "1.2.2",
  "title": "Towers and subextensions.",
  "body": " Towers and subextensions   A tower of fields is a chain of one or more field extensions . Similar notational conventions as in apply to towers of fields.  Given a tower of fields , we call an intermediate field of the field extension , and we call a subextension of .   "
},
{
  "id": "eg_field_ext",
  "level": "2",
  "url": "s_field_extension.html#eg_field_ext",
  "type": "Example",
  "number": "1.2.3",
  "title": "Tower of fields.",
  "body": " Tower of fields  The rational, real, and complex comprise a familiar tower of fields .  "
},
{
  "id": "d_prime_subfield",
  "level": "2",
  "url": "s_field_extension.html#d_prime_subfield",
  "type": "Definition",
  "number": "1.2.4",
  "title": "Prime subfield.",
  "body": " Prime subfield   Let be a field. The prime subfield of is the subfield defined as the intersection of all subfields of : , .   "
},
{
  "id": "th_prime_subfield",
  "level": "2",
  "url": "s_field_extension.html#th_prime_subfield",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Prime subfields and characteristic.",
  "body": " Prime subfields and characteristic   Let be a field, and let be its prime subfield.   We have or , where is a prime integer.    If , then .    If , then .       Let be defined as . (Recall that there is a unique ring homomorphism from to any other ring.) Since is a subring of , it is an integral domain; since , we see that is a prime ideal of . It follows that or , where is a prime integer.   If , then is injective, and thus for all positive integers . We see that in this case.  If , then is the smallest positive element of , from which it follows that is the smallest positive integer satisfying . We see that in this case.    If , then from the analysis above we see that is injective. Using , since , we see that extends to an injective map , defined as . Its image is a subfield of isomorphic to . We claim that is in fact the prime subfield of . Indeed, any subfield must contain , and hence for all ; since also contains inverses of all nonzero elements, it also contains elements of the form , , and hence all elements of the form , . It follows from that , as desired.    Assume . In this case and . Thus is a subfield of isomorphic to . It is easy to see that in fact is the prime subfield of , since any subfield contains , and hence also .      "
},
{
  "id": "d_field_generated",
  "level": "2",
  "url": "s_field_extension.html#d_field_generated",
  "type": "Definition",
  "number": "1.2.6",
  "title": "Generated field.",
  "body": " Generated field    field generated over by    Given a field extension and a subset the field generated over by , denoted , is defined as . Equivalently, is the smallest subfield of containing the set and : that is, if and , then .  When (resp., ), we denote as (resp. ).   "
},
{
  "id": "proc_generated_field",
  "level": "2",
  "url": "s_field_extension.html#proc_generated_field",
  "type": "Procedure",
  "number": "1.2.7",
  "title": "Generated field.",
  "body": " Generated field   Given an extension and subset , to prove , proceed as follows:   contains and  Show that is a subfield of containing and .    is the smallest such field  Show that for any subfield of containing and , we have .      "
},
{
  "id": "eg_field_generated",
  "level": "2",
  "url": "s_field_extension.html#eg_field_generated",
  "type": "Example",
  "number": "1.2.8",
  "title": "Field generated by element.",
  "body": " Field generated by element   Consider the extension . Show that .    Let . We follow to show .   We have seen earlier that is a subfield of , and clearly it contains and .    Suppose is a subfield of containing and . We must show that . Take any . Since by definition , and since by assumption contains and , we have . Since is a subring of , and hence closed under addition and multiplication, we have , as desired.      "
},
{
  "id": "s_degree",
  "level": "1",
  "url": "s_degree.html",
  "type": "Section",
  "number": "1.3",
  "title": "Degree of a field extension",
  "body": " Degree of a field extension   Vector spaces  In general, given a ring extension , the ring is naturally a module over the ring , where the module addition operation is just the ring addition of , and where scalar multiplication of a scalar  and module element  is defined as the ring product . In the special case of a field extension , the field is a module over the the field , and is thus an -vector space .   Vector space   Let be a field. We call an -module a vector space over (or an -vector space ).     Vector space notions   Let be an -vector space.   Subspace  A subset is a subspace of , denoted , if it is an -submodule: , it is closed under addition and scalar multiplication.    Span  Given a set the span of , denoted is the set of all -linear combinations of elements of : , . A set  spans the vector space if .    Linear independence  A set is linearly independent if for any distinct elements and scalars , if , then for all .  A set is linearly dependent if and only if it is not linearly independent.    Basis  A set is a basis of if it spans and is linearly independent.    Dimension  The space is finite dimensional if it contains a finite basis . If , then given any other basis of , we have . We define the dimension of to be , denoted .  The space is infinite dimensional if it does not contain a finite basis. We write in this case.        Dimension theory compendium   Let be an -vector space of dimension .   Contract  If spans V, then it can be contracted to a basis of : , we can find a basis with .    Expand  If is a linearly independent set, then it can be expanded to a basis of : , we can find a basis with .    Street smarts  Let be a subset of . If , then does not span ; if , then is linearly dependent; if , then spans if and only if is linearly independent if and only if is a basis.    Dimension of subspaces  If is a subspace, then    , and     if and only if .           Computing dimension   To compute the dimension of an -vector space proceed as follows.   Basis  Attempt to produce a basis of .    Dimension     If you found a finite basis in Step 1, then .      If you found an infinite basis in Step 1, or were able to show that no finite basis exists, then .  A common technique for showing that no finite basis exists is to exhibit an infinite linearly independent set.            Degree of an extension   Degree of an extension    degree of the extension    The degree of a field extension , denoted , is the dimension of as an -vector space: , . An extension is finite if and infinite if .     Degree of over  Consider the extension . Essentially by definition, the set is a basis of over , and thus .    Degree of quadratic extension   Let , where is a square-free positive integer. Compute .    First we claim that . This is shown in much the same manner as in . First we show that is indeed a field (easy), and then we follow .  Next we will show that , following . We claim that the set is basis of over . Since , we see that . To see that is linearly independent, assume we have for some . If , then , and thus is a rational root of the primitive integer polynomial . Gauss's lemma then implies that is an integer ; but this is clearly impossible, since , and is assumed to be a square-free integer. Thus we must have . But then implies , since .  Having shown that is a basis of over , we conclude that .     Degree of rational functions   Let be a field and consider the field extension , where is the field of rational functions in one variable over . Compute .    We claim . To prove the claim it is enough, thanks to , to show that there is an infinite linearly independent set. To this end, we claim that the set of all nonnegative powers of is linearly independent over . Indeed, a finite linear combination of elements of $x$ is nothing more than a polynomial , where for all . By definition of the polynomial ring , which we think of as a subset of , we have . This proves is linearly independent, and hence that is an infinite extension.     "
},
{
  "id": "d_vector_space",
  "level": "2",
  "url": "s_degree.html#d_vector_space",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Vector space.",
  "body": " Vector space   Let be a field. We call an -module a vector space over (or an -vector space ).   "
},
{
  "id": "d_vector_space_notions",
  "level": "2",
  "url": "s_degree.html#d_vector_space_notions",
  "type": "Definition",
  "number": "1.3.2",
  "title": "Vector space notions.",
  "body": " Vector space notions   Let be an -vector space.   Subspace  A subset is a subspace of , denoted , if it is an -submodule: , it is closed under addition and scalar multiplication.    Span  Given a set the span of , denoted is the set of all -linear combinations of elements of : , . A set  spans the vector space if .    Linear independence  A set is linearly independent if for any distinct elements and scalars , if , then for all .  A set is linearly dependent if and only if it is not linearly independent.    Basis  A set is a basis of if it spans and is linearly independent.    Dimension  The space is finite dimensional if it contains a finite basis . If , then given any other basis of , we have . We define the dimension of to be , denoted .  The space is infinite dimensional if it does not contain a finite basis. We write in this case.      "
},
{
  "id": "th_dimension_compendium",
  "level": "2",
  "url": "s_degree.html#th_dimension_compendium",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "Dimension theory compendium.",
  "body": " Dimension theory compendium   Let be an -vector space of dimension .   Contract  If spans V, then it can be contracted to a basis of : , we can find a basis with .    Expand  If is a linearly independent set, then it can be expanded to a basis of : , we can find a basis with .    Street smarts  Let be a subset of . If , then does not span ; if , then is linearly dependent; if , then spans if and only if is linearly independent if and only if is a basis.    Dimension of subspaces  If is a subspace, then    , and     if and only if .         "
},
{
  "id": "proc_dimension",
  "level": "2",
  "url": "s_degree.html#proc_dimension",
  "type": "Procedure",
  "number": "1.3.4",
  "title": "Computing dimension.",
  "body": " Computing dimension   To compute the dimension of an -vector space proceed as follows.   Basis  Attempt to produce a basis of .    Dimension     If you found a finite basis in Step 1, then .      If you found an infinite basis in Step 1, or were able to show that no finite basis exists, then .  A common technique for showing that no finite basis exists is to exhibit an infinite linearly independent set.         "
},
{
  "id": "d_degree",
  "level": "2",
  "url": "s_degree.html#d_degree",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Degree of an extension.",
  "body": " Degree of an extension    degree of the extension    The degree of a field extension , denoted , is the dimension of as an -vector space: , . An extension is finite if and infinite if .   "
},
{
  "id": "eg_degree_complex",
  "level": "2",
  "url": "s_degree.html#eg_degree_complex",
  "type": "Example",
  "number": "1.3.6",
  "title": "Degree of <span class=\"process-math\">\\(\\C\\)<\/span> over <span class=\"process-math\">\\(\\R\\)<\/span>.",
  "body": " Degree of over  Consider the extension . Essentially by definition, the set is a basis of over , and thus .  "
},
{
  "id": "eg_degree_quad",
  "level": "2",
  "url": "s_degree.html#eg_degree_quad",
  "type": "Example",
  "number": "1.3.7",
  "title": "Degree of quadratic extension.",
  "body": " Degree of quadratic extension   Let , where is a square-free positive integer. Compute .    First we claim that . This is shown in much the same manner as in . First we show that is indeed a field (easy), and then we follow .  Next we will show that , following . We claim that the set is basis of over . Since , we see that . To see that is linearly independent, assume we have for some . If , then , and thus is a rational root of the primitive integer polynomial . Gauss's lemma then implies that is an integer ; but this is clearly impossible, since , and is assumed to be a square-free integer. Thus we must have . But then implies , since .  Having shown that is a basis of over , we conclude that .   "
},
{
  "id": "eg_degree_rational",
  "level": "2",
  "url": "s_degree.html#eg_degree_rational",
  "type": "Example",
  "number": "1.3.8",
  "title": "Degree of rational functions.",
  "body": " Degree of rational functions   Let be a field and consider the field extension , where is the field of rational functions in one variable over . Compute .    We claim . To prove the claim it is enough, thanks to , to show that there is an infinite linearly independent set. To this end, we claim that the set of all nonnegative powers of is linearly independent over . Indeed, a finite linear combination of elements of $x$ is nothing more than a polynomial , where for all . By definition of the polynomial ring , which we think of as a subset of , we have . This proves is linearly independent, and hence that is an infinite extension.   "
},
{
  "id": "s_simple_extension",
  "level": "1",
  "url": "s_simple_extension.html",
  "type": "Section",
  "number": "1.4",
  "title": "Simple extensions",
  "body": " Simple extensions   Simple extension   Let be a field extension. A subextension is called a simple extension of if for some .  In plain English, a simple extension of is one generated over by a single element.     Generated fields convention   Let be a field. In order to speak of a field of the form or , we technically need to introduce a larger ambient field where these elements and are drawn from.  In situations where this ambient field does not play an important role, we reserve the right to omit it from our discussion. For example, if introducing a simple field extension without further details, it is assumed that in fact for some larger field .     Simple extensions     The extension is simple, since .    For any field , the field of rational functions in one variable is a simple field extension of .  On the other hand it is possible to show that the field of rational functions in two variables is not simple: , we do not have for any rational function .       Generated ring versus generated field   Let be a field extension, and let . Recall that denotes the subring of generated by over .         if and only if is a field.          By definition is the intersection of all sub rings containing and , and thus is a subset of which is, the intersection of all sub fields containing and .    Clearly, if , then is a field. Assume on the other hand that is a field. Since is a field containing and , and since is the smallest such field, we have . But by (1) we always have . Thus .        Quotients of polynomial rings  Let be a field, let be a nonconstant polynomial in , and let be the corresponding quotient ring homomorphism.   Since , we have , and hence the restriction of to is injective. As such , and we identify with its isomorphic image .    Given we denote for short. We have .       Maps between polynomial rings  A ring homomorphism extends naturally to a ring homomorphism that sends an -polynomial to the -polynomial . By abuse of notation, we will also denote this map of polynonmial rings as , and will write . We will call this map the apply to the coefficients map.    Quotients of polynomial rings   Let be a field and let be a nonconstant polynomial in . Following , given , we denote by its image in under the quotient map.   Simply generated  We have : , is generated over as a ring by , the image of under the quotient map.    Dimension  Let . The set is a basis of as a vector space over , and thus .    Mapping property  Let be a nonzero ring, and let be a ring homomorphism. Given any satisfying , where , the map is a ring homomorphism. Furthermore, the map is a bijection between the set of all ring homomorphisms satisfying and the set of elements of satisfying .  In other words, a ring homomorphism from to extending is uniquely determined by where it sends , and this image must be a root of the polynomial .       The proof of this result relies on various bits of theory from general ring theory. It is left as an (excellent) exercises.     Quotients of polynomial rings   Let be a field, let be an irreducible polynomial of degree , and let . Following , we identify with its image in under the quotient map.    is a field and the extension is simple. In fact, we have .    We have .       The corollary is a direct consequence of .     Field of cardinality four   Let . Prove that is a field of cardinality four.    Denote . Since , it is irreducible over if and only if it has a root in . Since , we see that is irreducible. Using , we conclude that is field, and that is a basis of over . It follows that every element of can be uniquely expressed as , with . There are exactly four such expressions: .     Quotients of   Let be any irreducible quadratic polynomial. Prove that .    Since is irreducible, the quotient is a field. Since , we have . Let be a root of . Using , the map defined as is a ring homomorphism. Furthermore, since is a field, the map is injective, and thus we have . We claim . This is a result of the fact that is a linear transformation of -vector spaces: , for any and , we have , as you can easily check. It then follows that as -vector spaces, and thus that . Since and , we conclude that .     Algebraic and transcendental elements   Let be a field extension. An element is algebraic over if there is a nonzero polynomial such that ; an element is transcendental over if it is not algebraic over .     Some transcendental elements of  In this course we will take for granted that the real numbers and are transcendental over . It is in fact not exceedingly difficult to prove this, though the proofs tend to be somewhat long.  It is a little easier to show, using Liouville's theorem (from number theory), that the real number is transcendental over .    Uncountably many transcendental numbers   Consider the field extension . We will show that in fact contains uncountably many elements that are transcendental over . (The argument below is originally due to Cantor, Godfather of uncountability arguments.)    Let , so that is the disjoint union of and . We will show that the set is countable, from whence it follows that must be uncountable, since is uncountable.  So why is countable? Each element of is the root of a polynomial . First we show that the set is countable. This is because , where is the set of all rational polynomials of degree at most . Each set is countable ( is in bijection with , which is countable), and thus , being a countable union of countable sets, is countable. Lastly, we have , where is the set of all roots of . Since each is finite, and since is countable, we see that is a countable union of finite sets, and hence is countable.     Simple extensions   Let be a field extension and let .   The following statements are equivalent.    is algebraic.     for some irreducible polynomial .     is finite: , .   Furthermore, when is algebraic, there is a basis of of the form .    The following statements are equivalent.    is transcendental.     and .     is infinite: , .          The key to proving both statements of the theorem is to understand the evaluation at ring homomorphism . Note first that we have , which implies is a prime ideal of (since is an integral domain). It follows that or for some irreducible polynomial . Furthermore, since . we see immediately that the element is transcendental if and only if if and only if is injective. Similarly, is algebraic if and only if for some irreducible polynomial .  Lastly, observe that , the subring of generated over by .  Having given a rather thorough analysis of we are ready to prove statements (1) and (2).   Proof of (1)  We have , where the last equivalence uses the fact that if and only if is a field. ( ) This proves (i) (ii).  Next, (ii) (iii) since if is irreducible, the quotient is a finite field extension of of degree .  Lastly (iii) (i) since if , then the set must be linearly dependent, in which case there is a nontrivial linear combination . But then we have , where is the nonzero polynomial . Thus is algebraic, as desired.    Proof of (2)  First observe that the equivalence (i) (iii) follows from (1) above simply by taking negations. Furthermore, we have (ii) (iii) since , as we saw in . Thus it remains only to show (i) (ii).  Assume is transcendental. We saw above that this is equivalent to our evaluation map being injective. Thus we have . Since , we may use to get an injective map . Thus is a subfield of containing and . Since in turn any field containing and must also contain all elements of the form , where and are polynomials, we see that in fact the smallest such field: , we have , as desired.     "
},
{
  "id": "d_simple_extension",
  "level": "2",
  "url": "s_simple_extension.html#d_simple_extension",
  "type": "Definition",
  "number": "1.4.1",
  "title": "Simple extension.",
  "body": " Simple extension   Let be a field extension. A subextension is called a simple extension of if for some .  In plain English, a simple extension of is one generated over by a single element.   "
},
{
  "id": "fiat_generated_fields",
  "level": "2",
  "url": "s_simple_extension.html#fiat_generated_fields",
  "type": "Fiat",
  "number": "1.4.2",
  "title": "Generated fields convention.",
  "body": " Generated fields convention   Let be a field. In order to speak of a field of the form or , we technically need to introduce a larger ambient field where these elements and are drawn from.  In situations where this ambient field does not play an important role, we reserve the right to omit it from our discussion. For example, if introducing a simple field extension without further details, it is assumed that in fact for some larger field .   "
},
{
  "id": "eg_simple",
  "level": "2",
  "url": "s_simple_extension.html#eg_simple",
  "type": "Example",
  "number": "1.4.3",
  "title": "Simple extensions.",
  "body": " Simple extensions     The extension is simple, since .    For any field , the field of rational functions in one variable is a simple field extension of .  On the other hand it is possible to show that the field of rational functions in two variables is not simple: , we do not have for any rational function .     "
},
{
  "id": "th_gen_ring_field",
  "level": "2",
  "url": "s_simple_extension.html#th_gen_ring_field",
  "type": "Theorem",
  "number": "1.4.4",
  "title": "Generated ring versus generated field.",
  "body": " Generated ring versus generated field   Let be a field extension, and let . Recall that denotes the subring of generated by over .         if and only if is a field.          By definition is the intersection of all sub rings containing and , and thus is a subset of which is, the intersection of all sub fields containing and .    Clearly, if , then is a field. Assume on the other hand that is a field. Since is a field containing and , and since is the smallest such field, we have . But by (1) we always have . Thus .      "
},
{
  "id": "not_quot_poly",
  "level": "2",
  "url": "s_simple_extension.html#not_quot_poly",
  "type": "Notation",
  "number": "1.4.5",
  "title": "Quotients of polynomial rings.",
  "body": " Quotients of polynomial rings  Let be a field, let be a nonconstant polynomial in , and let be the corresponding quotient ring homomorphism.   Since , we have , and hence the restriction of to is injective. As such , and we identify with its isomorphic image .    Given we denote for short. We have .     "
},
{
  "id": "not_poly_maps",
  "level": "2",
  "url": "s_simple_extension.html#not_poly_maps",
  "type": "Notation",
  "number": "1.4.6",
  "title": "Maps between polynomial rings.",
  "body": " Maps between polynomial rings  A ring homomorphism extends naturally to a ring homomorphism that sends an -polynomial to the -polynomial . By abuse of notation, we will also denote this map of polynonmial rings as , and will write . We will call this map the apply to the coefficients map.  "
},
{
  "id": "th_quot_poly",
  "level": "2",
  "url": "s_simple_extension.html#th_quot_poly",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "Quotients of polynomial rings.",
  "body": " Quotients of polynomial rings   Let be a field and let be a nonconstant polynomial in . Following , given , we denote by its image in under the quotient map.   Simply generated  We have : , is generated over as a ring by , the image of under the quotient map.    Dimension  Let . The set is a basis of as a vector space over , and thus .    Mapping property  Let be a nonzero ring, and let be a ring homomorphism. Given any satisfying , where , the map is a ring homomorphism. Furthermore, the map is a bijection between the set of all ring homomorphisms satisfying and the set of elements of satisfying .  In other words, a ring homomorphism from to extending is uniquely determined by where it sends , and this image must be a root of the polynomial .       The proof of this result relies on various bits of theory from general ring theory. It is left as an (excellent) exercises.   "
},
{
  "id": "cor_quot_poly",
  "level": "2",
  "url": "s_simple_extension.html#cor_quot_poly",
  "type": "Corollary",
  "number": "1.4.8",
  "title": "Quotients of polynomial rings.",
  "body": " Quotients of polynomial rings   Let be a field, let be an irreducible polynomial of degree , and let . Following , we identify with its image in under the quotient map.    is a field and the extension is simple. In fact, we have .    We have .       The corollary is a direct consequence of .   "
},
{
  "id": "s_simple_extension-10",
  "level": "2",
  "url": "s_simple_extension.html#s_simple_extension-10",
  "type": "Example",
  "number": "1.4.9",
  "title": "Field of cardinality four.",
  "body": " Field of cardinality four   Let . Prove that is a field of cardinality four.    Denote . Since , it is irreducible over if and only if it has a root in . Since , we see that is irreducible. Using , we conclude that is field, and that is a basis of over . It follows that every element of can be uniquely expressed as , with . There are exactly four such expressions: .   "
},
{
  "id": "s_simple_extension-11",
  "level": "2",
  "url": "s_simple_extension.html#s_simple_extension-11",
  "type": "Example",
  "number": "1.4.10",
  "title": "Quotients of <span class=\"process-math\">\\(\\R[x]\\)<\/span>.",
  "body": " Quotients of   Let be any irreducible quadratic polynomial. Prove that .    Since is irreducible, the quotient is a field. Since , we have . Let be a root of . Using , the map defined as is a ring homomorphism. Furthermore, since is a field, the map is injective, and thus we have . We claim . This is a result of the fact that is a linear transformation of -vector spaces: , for any and , we have , as you can easily check. It then follows that as -vector spaces, and thus that . Since and , we conclude that .   "
},
{
  "id": "d_algebraic",
  "level": "2",
  "url": "s_simple_extension.html#d_algebraic",
  "type": "Definition",
  "number": "1.4.11",
  "title": "Algebraic and transcendental elements.",
  "body": " Algebraic and transcendental elements   Let be a field extension. An element is algebraic over if there is a nonzero polynomial such that ; an element is transcendental over if it is not algebraic over .   "
},
{
  "id": "eg_trans_e_pi",
  "level": "2",
  "url": "s_simple_extension.html#eg_trans_e_pi",
  "type": "Example",
  "number": "1.4.12",
  "title": "Some transcendental elements of <span class=\"process-math\">\\(\\C\/\\Q\\)<\/span>.",
  "body": " Some transcendental elements of  In this course we will take for granted that the real numbers and are transcendental over . It is in fact not exceedingly difficult to prove this, though the proofs tend to be somewhat long.  It is a little easier to show, using Liouville's theorem (from number theory), that the real number is transcendental over .  "
},
{
  "id": "eg_trans_uncount",
  "level": "2",
  "url": "s_simple_extension.html#eg_trans_uncount",
  "type": "Example",
  "number": "1.4.13",
  "title": "Uncountably many transcendental numbers.",
  "body": " Uncountably many transcendental numbers   Consider the field extension . We will show that in fact contains uncountably many elements that are transcendental over . (The argument below is originally due to Cantor, Godfather of uncountability arguments.)    Let , so that is the disjoint union of and . We will show that the set is countable, from whence it follows that must be uncountable, since is uncountable.  So why is countable? Each element of is the root of a polynomial . First we show that the set is countable. This is because , where is the set of all rational polynomials of degree at most . Each set is countable ( is in bijection with , which is countable), and thus , being a countable union of countable sets, is countable. Lastly, we have , where is the set of all roots of . Since each is finite, and since is countable, we see that is a countable union of finite sets, and hence is countable.   "
},
{
  "id": "th_simple_ext",
  "level": "2",
  "url": "s_simple_extension.html#th_simple_ext",
  "type": "Theorem",
  "number": "1.4.14",
  "title": "Simple extensions.",
  "body": " Simple extensions   Let be a field extension and let .   The following statements are equivalent.    is algebraic.     for some irreducible polynomial .     is finite: , .   Furthermore, when is algebraic, there is a basis of of the form .    The following statements are equivalent.    is transcendental.     and .     is infinite: , .          The key to proving both statements of the theorem is to understand the evaluation at ring homomorphism . Note first that we have , which implies is a prime ideal of (since is an integral domain). It follows that or for some irreducible polynomial . Furthermore, since . we see immediately that the element is transcendental if and only if if and only if is injective. Similarly, is algebraic if and only if for some irreducible polynomial .  Lastly, observe that , the subring of generated over by .  Having given a rather thorough analysis of we are ready to prove statements (1) and (2).   Proof of (1)  We have , where the last equivalence uses the fact that if and only if is a field. ( ) This proves (i) (ii).  Next, (ii) (iii) since if is irreducible, the quotient is a finite field extension of of degree .  Lastly (iii) (i) since if , then the set must be linearly dependent, in which case there is a nontrivial linear combination . But then we have , where is the nonzero polynomial . Thus is algebraic, as desired.    Proof of (2)  First observe that the equivalence (i) (iii) follows from (1) above simply by taking negations. Furthermore, we have (ii) (iii) since , as we saw in . Thus it remains only to show (i) (ii).  Assume is transcendental. We saw above that this is equivalent to our evaluation map being injective. Thus we have . Since , we may use to get an injective map . Thus is a subfield of containing and . Since in turn any field containing and must also contain all elements of the form , where and are polynomials, we see that in fact the smallest such field: , we have , as desired.    "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "1.5",
  "title": "Algebraic extensions: definition",
  "body": " Algebraic extensions: definition  In this section we be begin to investigate in earnest the concept of an element (and a field extension) being algebraic . (In fact, the focus of the course from here on out will be more on algebraic elements, and less on transcendental elements.) An essential tool in our investigation will be the notion of the minimal polynomial of an algebraic element.   Minimal polynomial   Let be a field extension, let be algebraic, and let be the evaluation at map. There is a unique polynomial satisfying the following equivalent conditions.    is monic and satisfies .     is a monic polynomial of minimal degree satisfying .     is a monic irreducible polynomial satisfying .       Let be the evaluation at map. Since is algebraic, according to  is nonzero and generated by an irreducible polynomial. Although the generator of is not in general unique, there is a unique monic irreducible generator . This gives us the unique existence of a polynomial as described in (1).  Continue to assume that is the unique monic generator of . The equivalence of conditions (1)-(3) follows from the following observations:   Since is a nonzero prime ideal, any generator of it must be irreducible.    A polynomial if and only if .    In general for a nonzero ideal , we have if and only if is an element of of minimal degree.    Since in this case is a nonzero prime ideal, we have if and only if is an irreducible element of .        Minimal polynomial   Let be a field extension, and let be algebraic. The unique monic polynomial satisfying the three equivalent conditions of is called the minimal polynomial (or irreducible polynomial ) of over , and is denoted , or just if the base field is understood.  The degree of the algebraic element over , denoted , is defined as the degree of the minimal polynomial of : , .     Minimal polynomial   Let be a field extension, and let be an algebraic element with minimal polynomial .   Let . The set is an -basis of , and thus .    Given , we have if and only if . In particular, if , then is one of the monic irreducible factors of .          This follows from the fact that , according to .    Let be the kernel of the evaluation at map . By , we have . We conclude that , as desired.        Minimal polynomials for  Consider the field extension and the element . Since is a root of of the polynomial , and since this polynomial is irreducible over and monic over , we have   More generally, given any , since is the root of , and since is not the root of any linear polynomial (since ), we see that .    Minimal polynomial of root of unity   Consider the extension , and let , a primitive -th root of unity.   Compute .    Compute .          Following , we have .    Since , we have , where . According to , the minimal polynomial of is one of the monic irreducible polynomials appearing in the factorization of over . Let's factor: . It is not difficult to show that is irreducible over . (By Gauss's lemma we need only show that it is irreducible over .) Since is not a root of , , or (whose roots are ), we conclude that .        Algebraic extension   Let be a field extension. We say is algebraic over if all elements of are algebraic over .     Algebraic extensions  The extension is not algebraic, since is transcendental over .  The extension is algebraic. As we have shown previously, any element satisfies the quadratic polynomial .    Simple extension with algebraic generator   Let , where is algebraic. Prove that is algebraic over .    According to , we have for some finite . Given , consider the set of the powers of . If we have for two powers , then we have , and satisfies the nonzero polynomial , and is thus algebraic. If the powers are all distinct, since then , is linearly dependent ( , street smarts ). Thus there is a nontrivial linear combination . In other words, we have , where , and . Thus is algebraic in this case as well. Since was arbitrary, we conclude that is algebraic over .    "
},
{
  "id": "th_min_poly",
  "level": "2",
  "url": "s_algebraic.html#th_min_poly",
  "type": "Theorem",
  "number": "1.5.1",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let be a field extension, let be algebraic, and let be the evaluation at map. There is a unique polynomial satisfying the following equivalent conditions.    is monic and satisfies .     is a monic polynomial of minimal degree satisfying .     is a monic irreducible polynomial satisfying .       Let be the evaluation at map. Since is algebraic, according to  is nonzero and generated by an irreducible polynomial. Although the generator of is not in general unique, there is a unique monic irreducible generator . This gives us the unique existence of a polynomial as described in (1).  Continue to assume that is the unique monic generator of . The equivalence of conditions (1)-(3) follows from the following observations:   Since is a nonzero prime ideal, any generator of it must be irreducible.    A polynomial if and only if .    In general for a nonzero ideal , we have if and only if is an element of of minimal degree.    Since in this case is a nonzero prime ideal, we have if and only if is an irreducible element of .      "
},
{
  "id": "d_min_poly",
  "level": "2",
  "url": "s_algebraic.html#d_min_poly",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let be a field extension, and let be algebraic. The unique monic polynomial satisfying the three equivalent conditions of is called the minimal polynomial (or irreducible polynomial ) of over , and is denoted , or just if the base field is understood.  The degree of the algebraic element over , denoted , is defined as the degree of the minimal polynomial of : , .   "
},
{
  "id": "cor_min_poly",
  "level": "2",
  "url": "s_algebraic.html#cor_min_poly",
  "type": "Corollary",
  "number": "1.5.3",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let be a field extension, and let be an algebraic element with minimal polynomial .   Let . The set is an -basis of , and thus .    Given , we have if and only if . In particular, if , then is one of the monic irreducible factors of .          This follows from the fact that , according to .    Let be the kernel of the evaluation at map . By , we have . We conclude that , as desired.      "
},
{
  "id": "eg_min_poly_R",
  "level": "2",
  "url": "s_algebraic.html#eg_min_poly_R",
  "type": "Example",
  "number": "1.5.4",
  "title": "Minimal polynomials for <span class=\"process-math\">\\(\\C\/\\R\\)<\/span>.",
  "body": " Minimal polynomials for  Consider the field extension and the element . Since is a root of of the polynomial , and since this polynomial is irreducible over and monic over , we have   More generally, given any , since is the root of , and since is not the root of any linear polynomial (since ), we see that .  "
},
{
  "id": "eg_min_poly_Q",
  "level": "2",
  "url": "s_algebraic.html#eg_min_poly_Q",
  "type": "Example",
  "number": "1.5.5",
  "title": "Minimal polynomial of root of unity.",
  "body": " Minimal polynomial of root of unity   Consider the extension , and let , a primitive -th root of unity.   Compute .    Compute .          Following , we have .    Since , we have , where . According to , the minimal polynomial of is one of the monic irreducible polynomials appearing in the factorization of over . Let's factor: . It is not difficult to show that is irreducible over . (By Gauss's lemma we need only show that it is irreducible over .) Since is not a root of , , or (whose roots are ), we conclude that .      "
},
{
  "id": "d_algebraic_ext",
  "level": "2",
  "url": "s_algebraic.html#d_algebraic_ext",
  "type": "Definition",
  "number": "1.5.6",
  "title": "Algebraic extension.",
  "body": " Algebraic extension   Let be a field extension. We say is algebraic over if all elements of are algebraic over .   "
},
{
  "id": "eg_alg_ext",
  "level": "2",
  "url": "s_algebraic.html#eg_alg_ext",
  "type": "Example",
  "number": "1.5.7",
  "title": "Algebraic extensions.",
  "body": " Algebraic extensions  The extension is not algebraic, since is transcendental over .  The extension is algebraic. As we have shown previously, any element satisfies the quadratic polynomial .  "
},
{
  "id": "eg_finite_simple_alg",
  "level": "2",
  "url": "s_algebraic.html#eg_finite_simple_alg",
  "type": "Example",
  "number": "1.5.8",
  "title": "Simple extension with algebraic generator.",
  "body": " Simple extension with algebraic generator   Let , where is algebraic. Prove that is algebraic over .    According to , we have for some finite . Given , consider the set of the powers of . If we have for two powers , then we have , and satisfies the nonzero polynomial , and is thus algebraic. If the powers are all distinct, since then , is linearly dependent ( , street smarts ). Thus there is a nontrivial linear combination . In other words, we have , where , and . Thus is algebraic in this case as well. Since was arbitrary, we conclude that is algebraic over .   "
},
{
  "id": "s_alg_finite_ext",
  "level": "1",
  "url": "s_alg_finite_ext.html",
  "type": "Section",
  "number": "1.6",
  "title": "Algebraic extensions: theory",
  "body": " Algebraic extensions: theory  The main result of this section is , which both generalizes and gives a full characterization of finite extensions in terms of finitely generated and algebraic field extensions. First we treat the tower law , which will be instrumental in proving , and is also quite useful in its own right.   Tower law   Let be a tower of (possibly infinite) field extensions.   If is a basis of and is a basis of as a -vector space, then the set of all pairwise products of elements of and is a basis of as an -vector space.    We have .       Proof of (1)  Let , as in the theorem statement. We will show directly that is a basis of as an -vector space, by showing that it spans and is linearly independent.   spans  Given any , since is a -basis of , we can write for some elements and scalars . Next since is a basis of over , we can find a finite set such that for each we have for some elements . Substituting these expressions for into the first linear combination above, we conclude that for some scalars and elements . This shows that every element of can be written as a -linear combination of elements of , and hence that .    is linearly independent  Assume we have an -linear combination , where , , and the elements are distinct. Grouping terms, we can re-write this as , where for each , we have . Firstly, since for all , it follows easily that for . Since is linearly independent over , we conclude that for all . But then, since is linearly independent over , for all we have . We conclude that for all and . This proves is linearly independent over .     Proof of (2)  We treat two cases: (a) and are both finite extensions, and (b) at least one of and is an infinite extension.   Case (a)  Assume and , for positive integers . By definition we can find bases for as an -vector space, and as a -vector space, respectively. By statement (1) of this theorem, we conclude that is a basis of as an -vector space. It remains only to show that , since then we have . To see that , we show that the map is a bijection, whence . The map is surjective by definition of . That the map is injective follows from the following chain of implications: .    Case (b)  Assume first that is infinite. In this case we can find an infinite set of the form that is linearly independent over . But is also a subset of , and thus has an infinite linearly independent set, making it an infinite extension.  Now assume that is infinite. In this case we can find an infinite set of the form that is linearly independent over . But then is also linearly independent over the smaller field , since an -linear combination of elements of is also a -linear combination. Thus also has infinite dimension.      Tower law  Statement (1) of is just as important as (2), as it gives us a procedure for building a basis for from bases of and of : namely, we simply take the set of all products of elements in and .    Tower law: infinite extensions  The formula is true even when one or more of the field extensions involved is infinite, using the following rules from extended arithmetic : . Equivalently, we can interpret as stating that the extension is infinite if and only if is infinite or is infinite.    Tower law      Let be a tower of finite field extensions. The integers and divide the integer : , we have .    Given a tower of extensions , we have .       Statement (1) follows directly from ; statement (2) follows from by induction.    We now make use of to prove a nice generalization of .   Finite implies algebraic   Let be a field extension. If is finite, then is algebraic. Using logical shorthand, we have .    We could a proof much along the lines of the argument used in , however allows us to simplify things somewhat.  Let . Let , and consider the field extension . Since we have , and since is finite, the tower law implies is finite. now implies is algebraic. Since was arbitrary, we see that is algebraic over .    Assume is algebraic. It is not true in general that is finite: that is, the converse of is not true. , which we will prove in the next section, identifies an additional property needs to satisfy in order to be finite: namely, it must be finitely generated . By the end of that section, we will also be able to provide an example of a field extension that is algebraic but not finite.   Tower law  Use the tower law to prove that the field extension has no nontrivial subextension : , if , then or .   Now on to the finite extension theorem , which says that a field extension is finite if and only if it is algebraic and finitely generated .   Finitely generated   Let be a field extension. We say is finitely generated over if we have for some finite set .    It is not the case that every field extension is finitely generated: , it is possible to show that is not finitely generated over . However, according to , every field extension is a union of finitely generated field extensions.   Finitely generated extensions   Let be a field extension, and suppose for some (possibly infinite) subset . We have . In particular, is a union of finitely generated field extensions of .    Homework exercise.     Finite extension theorem   Let be a field extension. The following statements are equivalent.    is finite.     is finitely generated and algebraic.     , where is algebraic over . In other words, is generated over by finitely many algebraic elements.       We prove the cycle of implications (1) (2) (3) (1)   Implication: (1) (2)  Assume is finite, of dimension .   By , since is finite, it is algebraic.    We claim is finitely generated. Let be a basis of as an -vector space. Since , we have . It follows that , and hence is finitely generated (by the elements ). Indeed, since is a subfield of containing and for all , it must contain all -linear combinations of the . But then we have , and conclude that .       Implication: (2) (3)  Assume is finitely generated and algebraic. Since is finitely generated, there are elements such that . Since is algebraic, each element is algebraic over . Thus , and each is algebraic over , as desired.    Implication: (3) (1)  We will show that any field extension generated by finitely many algebraic elements is finite. The proof will proceed by induction on the number of generators of the field.  Base step: . Assume , where is algebraic over . By , we have . Thus is finite.  Induction step: assume any field extension generated over the base field by algebraic elements is a finite extension. Now suppose we have , where each is algebraic over . If for all , then , in which case is finite over . Otherwise, we may assume without loss of generality that . Since is algebraic over , the extension is finite by the base step. Let . We have a tower of fields , and thus by the tower law , the extension is finite if and only if is finite and is finite. We know already that is finite over . As for the extension it is easy to see that . Furthermore, since each is satisfies a nonzero polynomial , we see that each is algebraic over . Thus the extension is generated over by the algebraic elements . By induction is finite. The tower law now implies that is finite.      Finite extension theorem  As we saw in the proof of , given a field extension the following implications hold: . On the other hand, neither of these implications goes the other way. That is, we have . In other words, taken singly, neither of these two properties (finitely generated, algebraic) is strong enough to imply the property of being finite. tells us that the two properties taken together are in fact equivalent to being finite: , .    can be used to prove important facts about general algebraic extensions, finitely generated or not. We record a few of these now as corollaries.   Algebraically generated is algebraic   Let be a field extension. The following statements are equivalent.    is algebraic.     , where is a (possibly infinite) set of algebraic elements.   In plain English: the field is algebraic over if and only if is algebraically generated over .    The implication (1) (2) is clear, since if is algebraic, then we have and all elements of are algebraic over .  We now prove the implication (2) (1). Assume , where is a set of algebraic elements of . Since by we have , given any , we have for some . Since each is algebraic, is finite over , hence algebraic over by . We conclude that is algebraic over , as desired.     Algebraically generated   Let . Show that the extension is (a) infinite, (b) algebraic, and (c) not finitely generated.     Algebraic towers   Given a tower of fields , we have algebraic if and only if is algebraic and is algebraic. Using logical shorthand: .    Homework exercise.     Relative algebraic closure   Let be a field extension.   If are algebraic over , then so are , , and . If is nonzero and algebraic, then so is its inverse .    Let .    is an algebraic subextension of .     is the unique maximal algebraic subextension of in the following sense: if is an algebraic subextension of , then .             Fix any algebraic elements . That the other elements listed in this statement ( , , ) are algebraic follows from the fact that is algebraic ( ).    That is a field containing follows from the fact that all elements of are algebraic over , and that the set of all algebraic elements is closed under addition, multiplication, and inverses (by (1)).  Clearly, if is an algebraic extension, then since all elements of are algebraic over , we have .        Relative algebraic closure   Let be a field extension. The field defined in is called the algebraic closure of in . We call this a relative algebraic closure of .     Relative algebraic closure  The field is called the relative algebraic closure of , since it depends on . Later we will define the plain old algebraic closure of , denoted , which (up to isomorphism) depends only on .    Relative algebraic closure  Let's consider some relative algebraic closures of .   Let . Clearly the algebraic closure of in is : that is, .    Let . As you will show in homework, every element of is transcendental. Thus in this case as well.    Lastly, consider and the relative algebraic closure . By the fundamental theorem of algebra, given any rational polynomial , we can factor over as . For all , since is a root of , it is algebraic, and hence is an element of . It follows that in fact every rational polynomial can be factored into linear terms over the field . The field is a good deal more manageable than in that it is (a) algebraic over , and (b) is countable (as opposed to uncountable), as one can show along the lines of .      "
},
{
  "id": "th_degree_towers",
  "level": "2",
  "url": "s_alg_finite_ext.html#th_degree_towers",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Tower law.",
  "body": " Tower law   Let be a tower of (possibly infinite) field extensions.   If is a basis of and is a basis of as a -vector space, then the set of all pairwise products of elements of and is a basis of as an -vector space.    We have .       Proof of (1)  Let , as in the theorem statement. We will show directly that is a basis of as an -vector space, by showing that it spans and is linearly independent.   spans  Given any , since is a -basis of , we can write for some elements and scalars . Next since is a basis of over , we can find a finite set such that for each we have for some elements . Substituting these expressions for into the first linear combination above, we conclude that for some scalars and elements . This shows that every element of can be written as a -linear combination of elements of , and hence that .    is linearly independent  Assume we have an -linear combination , where , , and the elements are distinct. Grouping terms, we can re-write this as , where for each , we have . Firstly, since for all , it follows easily that for . Since is linearly independent over , we conclude that for all . But then, since is linearly independent over , for all we have . We conclude that for all and . This proves is linearly independent over .     Proof of (2)  We treat two cases: (a) and are both finite extensions, and (b) at least one of and is an infinite extension.   Case (a)  Assume and , for positive integers . By definition we can find bases for as an -vector space, and as a -vector space, respectively. By statement (1) of this theorem, we conclude that is a basis of as an -vector space. It remains only to show that , since then we have . To see that , we show that the map is a bijection, whence . The map is surjective by definition of . That the map is injective follows from the following chain of implications: .    Case (b)  Assume first that is infinite. In this case we can find an infinite set of the form that is linearly independent over . But is also a subset of , and thus has an infinite linearly independent set, making it an infinite extension.  Now assume that is infinite. In this case we can find an infinite set of the form that is linearly independent over . But then is also linearly independent over the smaller field , since an -linear combination of elements of is also a -linear combination. Thus also has infinite dimension.    "
},
{
  "id": "s_alg_finite_ext-4",
  "level": "2",
  "url": "s_alg_finite_ext.html#s_alg_finite_ext-4",
  "type": "Remark",
  "number": "1.6.2",
  "title": "Tower law.",
  "body": " Tower law  Statement (1) of is just as important as (2), as it gives us a procedure for building a basis for from bases of and of : namely, we simply take the set of all products of elements in and .  "
},
{
  "id": "s_alg_finite_ext-5",
  "level": "2",
  "url": "s_alg_finite_ext.html#s_alg_finite_ext-5",
  "type": "Remark",
  "number": "1.6.3",
  "title": "Tower law: infinite extensions.",
  "body": " Tower law: infinite extensions  The formula is true even when one or more of the field extensions involved is infinite, using the following rules from extended arithmetic : . Equivalently, we can interpret as stating that the extension is infinite if and only if is infinite or is infinite.  "
},
{
  "id": "cor_degree_towers",
  "level": "2",
  "url": "s_alg_finite_ext.html#cor_degree_towers",
  "type": "Corollary",
  "number": "1.6.4",
  "title": "Tower law.",
  "body": " Tower law      Let be a tower of finite field extensions. The integers and divide the integer : , we have .    Given a tower of extensions , we have .       Statement (1) follows directly from ; statement (2) follows from by induction.   "
},
{
  "id": "th_finite_implies_algebraic",
  "level": "2",
  "url": "s_alg_finite_ext.html#th_finite_implies_algebraic",
  "type": "Theorem",
  "number": "1.6.5",
  "title": "Finite implies algebraic.",
  "body": " Finite implies algebraic   Let be a field extension. If is finite, then is algebraic. Using logical shorthand, we have .    We could a proof much along the lines of the argument used in , however allows us to simplify things somewhat.  Let . Let , and consider the field extension . Since we have , and since is finite, the tower law implies is finite. now implies is algebraic. Since was arbitrary, we see that is algebraic over .   "
},
{
  "id": "eg_degree_towers",
  "level": "2",
  "url": "s_alg_finite_ext.html#eg_degree_towers",
  "type": "Example",
  "number": "1.6.6",
  "title": "Tower law.",
  "body": " Tower law  Use the tower law to prove that the field extension has no nontrivial subextension : , if , then or .  "
},
{
  "id": "d_fin_gen",
  "level": "2",
  "url": "s_alg_finite_ext.html#d_fin_gen",
  "type": "Definition",
  "number": "1.6.7",
  "title": "Finitely generated.",
  "body": " Finitely generated   Let be a field extension. We say is finitely generated over if we have for some finite set .   "
},
{
  "id": "th_fin_gen",
  "level": "2",
  "url": "s_alg_finite_ext.html#th_fin_gen",
  "type": "Theorem",
  "number": "1.6.8",
  "title": "Finitely generated extensions.",
  "body": " Finitely generated extensions   Let be a field extension, and suppose for some (possibly infinite) subset . We have . In particular, is a union of finitely generated field extensions of .    Homework exercise.   "
},
{
  "id": "th_finite_ext",
  "level": "2",
  "url": "s_alg_finite_ext.html#th_finite_ext",
  "type": "Theorem",
  "number": "1.6.9",
  "title": "Finite extension theorem.",
  "body": " Finite extension theorem   Let be a field extension. The following statements are equivalent.    is finite.     is finitely generated and algebraic.     , where is algebraic over . In other words, is generated over by finitely many algebraic elements.       We prove the cycle of implications (1) (2) (3) (1)   Implication: (1) (2)  Assume is finite, of dimension .   By , since is finite, it is algebraic.    We claim is finitely generated. Let be a basis of as an -vector space. Since , we have . It follows that , and hence is finitely generated (by the elements ). Indeed, since is a subfield of containing and for all , it must contain all -linear combinations of the . But then we have , and conclude that .       Implication: (2) (3)  Assume is finitely generated and algebraic. Since is finitely generated, there are elements such that . Since is algebraic, each element is algebraic over . Thus , and each is algebraic over , as desired.    Implication: (3) (1)  We will show that any field extension generated by finitely many algebraic elements is finite. The proof will proceed by induction on the number of generators of the field.  Base step: . Assume , where is algebraic over . By , we have . Thus is finite.  Induction step: assume any field extension generated over the base field by algebraic elements is a finite extension. Now suppose we have , where each is algebraic over . If for all , then , in which case is finite over . Otherwise, we may assume without loss of generality that . Since is algebraic over , the extension is finite by the base step. Let . We have a tower of fields , and thus by the tower law , the extension is finite if and only if is finite and is finite. We know already that is finite over . As for the extension it is easy to see that . Furthermore, since each is satisfies a nonzero polynomial , we see that each is algebraic over . Thus the extension is generated over by the algebraic elements . By induction is finite. The tower law now implies that is finite.    "
},
{
  "id": "s_alg_finite_ext-16",
  "level": "2",
  "url": "s_alg_finite_ext.html#s_alg_finite_ext-16",
  "type": "Remark",
  "number": "1.6.10",
  "title": "Finite extension theorem.",
  "body": " Finite extension theorem  As we saw in the proof of , given a field extension the following implications hold: . On the other hand, neither of these implications goes the other way. That is, we have . In other words, taken singly, neither of these two properties (finitely generated, algebraic) is strong enough to imply the property of being finite. tells us that the two properties taken together are in fact equivalent to being finite: , .  "
},
{
  "id": "cor_algebraic_algebraic_generated",
  "level": "2",
  "url": "s_alg_finite_ext.html#cor_algebraic_algebraic_generated",
  "type": "Corollary",
  "number": "1.6.11",
  "title": "Algebraically generated is algebraic.",
  "body": " Algebraically generated is algebraic   Let be a field extension. The following statements are equivalent.    is algebraic.     , where is a (possibly infinite) set of algebraic elements.   In plain English: the field is algebraic over if and only if is algebraically generated over .    The implication (1) (2) is clear, since if is algebraic, then we have and all elements of are algebraic over .  We now prove the implication (2) (1). Assume , where is a set of algebraic elements of . Since by we have , given any , we have for some . Since each is algebraic, is finite over , hence algebraic over by . We conclude that is algebraic over , as desired.   "
},
{
  "id": "s_alg_finite_ext-19",
  "level": "2",
  "url": "s_alg_finite_ext.html#s_alg_finite_ext-19",
  "type": "Example",
  "number": "1.6.12",
  "title": "Algebraically generated.",
  "body": " Algebraically generated   Let . Show that the extension is (a) infinite, (b) algebraic, and (c) not finitely generated.   "
},
{
  "id": "cor_alg_transitive",
  "level": "2",
  "url": "s_alg_finite_ext.html#cor_alg_transitive",
  "type": "Corollary",
  "number": "1.6.13",
  "title": "Algebraic towers.",
  "body": " Algebraic towers   Given a tower of fields , we have algebraic if and only if is algebraic and is algebraic. Using logical shorthand: .    Homework exercise.   "
},
{
  "id": "cor_rel_alg_closure",
  "level": "2",
  "url": "s_alg_finite_ext.html#cor_rel_alg_closure",
  "type": "Corollary",
  "number": "1.6.14",
  "title": "Relative algebraic closure.",
  "body": " Relative algebraic closure   Let be a field extension.   If are algebraic over , then so are , , and . If is nonzero and algebraic, then so is its inverse .    Let .    is an algebraic subextension of .     is the unique maximal algebraic subextension of in the following sense: if is an algebraic subextension of , then .             Fix any algebraic elements . That the other elements listed in this statement ( , , ) are algebraic follows from the fact that is algebraic ( ).    That is a field containing follows from the fact that all elements of are algebraic over , and that the set of all algebraic elements is closed under addition, multiplication, and inverses (by (1)).  Clearly, if is an algebraic extension, then since all elements of are algebraic over , we have .      "
},
{
  "id": "d_rel_alg_closure",
  "level": "2",
  "url": "s_alg_finite_ext.html#d_rel_alg_closure",
  "type": "Definition",
  "number": "1.6.15",
  "title": "Relative algebraic closure.",
  "body": " Relative algebraic closure   Let be a field extension. The field defined in is called the algebraic closure of in . We call this a relative algebraic closure of .   "
},
{
  "id": "s_alg_finite_ext-23",
  "level": "2",
  "url": "s_alg_finite_ext.html#s_alg_finite_ext-23",
  "type": "Remark",
  "number": "1.6.16",
  "title": "Relative algebraic closure.",
  "body": " Relative algebraic closure  The field is called the relative algebraic closure of , since it depends on . Later we will define the plain old algebraic closure of , denoted , which (up to isomorphism) depends only on .  "
},
{
  "id": "s_alg_finite_ext-24",
  "level": "2",
  "url": "s_alg_finite_ext.html#s_alg_finite_ext-24",
  "type": "Example",
  "number": "1.6.17",
  "title": "Relative algebraic closure.",
  "body": " Relative algebraic closure  Let's consider some relative algebraic closures of .   Let . Clearly the algebraic closure of in is : that is, .    Let . As you will show in homework, every element of is transcendental. Thus in this case as well.    Lastly, consider and the relative algebraic closure . By the fundamental theorem of algebra, given any rational polynomial , we can factor over as . For all , since is a root of , it is algebraic, and hence is an element of . It follows that in fact every rational polynomial can be factored into linear terms over the field . The field is a good deal more manageable than in that it is (a) algebraic over , and (b) is countable (as opposed to uncountable), as one can show along the lines of .     "
},
{
  "id": "s_splitting",
  "level": "1",
  "url": "s_splitting.html",
  "type": "Section",
  "number": "1.7",
  "title": "Splitting fields",
  "body": " Splitting fields   Split completely   Let be a field extension. A polynomial  splits completely over if factors over as , for some integer , constant , and elements . We say that the field  splits the polynomial in this case.  More generally, if is a set of polynomials, we say that splits if it splits each polynomial .     Constant polynomials  Observe that according to our definition any constant polynomial splits over itself.    Split completely      Show that the polynomial splits completely over the field .    Show that the polynomial splits completely over .    Show that the polynomial does not split completely over .            Splitting field   Let be a field, and let be a set of polynomials over . A field extension is called a splitting field of the collection if the following conditions hold.   splits  For all , splits completely in .    minimal  If is a subextension of such that splits completely in for all , then . In other words, there is no proper subextension of that splits .   When is finite, or is described as an indexed set , we will call a splitting field of a splitting field of the .     Splitting fields      Show that is a splitting field of .    Show that is a splitting field of .    Show that is a splitting field of , where , a primitive cube-root of unity.       Bit by bit we will be able to prove that (a) given any field and collection of polynomials , there is indeed a splitting field of , and furthermore (b) this splitting field is basically unique up to isomorphism.   Splitting field generated by roots   Let be a field, let a set of polynomials, and suppose is a field extension that splits . Define : , is the set of all the roots of all the polynomials in . The field generated over by all the roots of the polynomials in is a splitting field of .    It is clear that splits , since contains all the roots of all the polynomials of . We must show that contains no proper subextension that splits . This is clear: if is a subextension of that splits , then must contain all roots of all polynomials of ; that is, must contain . Since by definition is the smallest extension of containing and , we have . Since , we conclude .     Splitting fields are algebraic   Let be a field, let be a set of polynomials. If is a splitting field of , then is algebraic.    Clearly splits . By , we have , where is the set of all roots of all polynomials of . Since each element of is algebraic over , we see by , that is algebraic over .     Splitting field of polynomial   Let be a field. Any nonzero polynomial of degree has a splitting field satisfying .    We proceed by induction on .  Base step: . In this case splits over , in which case the splitting field of is , which satisfies .  Induction step: fix , and assume the result holds for any field and any polynomial over that field of degree . Suppose satisfies . Let be any irreducible factor of over . By the quotient is a field extension of , satisfies , where is a root of , and has degree . Since is a root of , it is also a root of , and we have for some nonzero polynomial , satisfying . By induction there is a splitting field of satisfying . Since splits and contains the root , we have for some and elements . By , the subextension is a splitting field of over and satisfies .     Splitting field of finite set   Let be a field, and let be a finite set of nonzero polynomials. A splitting field of exists.    By , the nonzero polynomial has a splitting field . It is clear that is also a splitting field of .    "
},
{
  "id": "d_split_poly",
  "level": "2",
  "url": "s_splitting.html#d_split_poly",
  "type": "Definition",
  "number": "1.7.1",
  "title": "Split completely.",
  "body": " Split completely   Let be a field extension. A polynomial  splits completely over if factors over as , for some integer , constant , and elements . We say that the field  splits the polynomial in this case.  More generally, if is a set of polynomials, we say that splits if it splits each polynomial .   "
},
{
  "id": "s_splitting-3",
  "level": "2",
  "url": "s_splitting.html#s_splitting-3",
  "type": "Remark",
  "number": "1.7.2",
  "title": "Constant polynomials.",
  "body": " Constant polynomials  Observe that according to our definition any constant polynomial splits over itself.  "
},
{
  "id": "eg_split_poly",
  "level": "2",
  "url": "s_splitting.html#eg_split_poly",
  "type": "Example",
  "number": "1.7.3",
  "title": "Split completely.",
  "body": " Split completely      Show that the polynomial splits completely over the field .    Show that the polynomial splits completely over .    Show that the polynomial does not split completely over .          "
},
{
  "id": "d_splitting_field",
  "level": "2",
  "url": "s_splitting.html#d_splitting_field",
  "type": "Definition",
  "number": "1.7.4",
  "title": "Splitting field.",
  "body": " Splitting field   Let be a field, and let be a set of polynomials over . A field extension is called a splitting field of the collection if the following conditions hold.   splits  For all , splits completely in .    minimal  If is a subextension of such that splits completely in for all , then . In other words, there is no proper subextension of that splits .   When is finite, or is described as an indexed set , we will call a splitting field of a splitting field of the .   "
},
{
  "id": "s_splitting-6",
  "level": "2",
  "url": "s_splitting.html#s_splitting-6",
  "type": "Example",
  "number": "1.7.5",
  "title": "Splitting fields.",
  "body": " Splitting fields      Show that is a splitting field of .    Show that is a splitting field of .    Show that is a splitting field of , where , a primitive cube-root of unity.      "
},
{
  "id": "th_split_to_splitting_field",
  "level": "2",
  "url": "s_splitting.html#th_split_to_splitting_field",
  "type": "Theorem",
  "number": "1.7.6",
  "title": "Splitting field generated by roots.",
  "body": " Splitting field generated by roots   Let be a field, let a set of polynomials, and suppose is a field extension that splits . Define : , is the set of all the roots of all the polynomials in . The field generated over by all the roots of the polynomials in is a splitting field of .    It is clear that splits , since contains all the roots of all the polynomials of . We must show that contains no proper subextension that splits . This is clear: if is a subextension of that splits , then must contain all roots of all polynomials of ; that is, must contain . Since by definition is the smallest extension of containing and , we have . Since , we conclude .   "
},
{
  "id": "cor_splitting_algebraic",
  "level": "2",
  "url": "s_splitting.html#cor_splitting_algebraic",
  "type": "Corollary",
  "number": "1.7.7",
  "title": "Splitting fields are algebraic.",
  "body": " Splitting fields are algebraic   Let be a field, let be a set of polynomials. If is a splitting field of , then is algebraic.    Clearly splits . By , we have , where is the set of all roots of all polynomials of . Since each element of is algebraic over , we see by , that is algebraic over .   "
},
{
  "id": "th_splitting_poly",
  "level": "2",
  "url": "s_splitting.html#th_splitting_poly",
  "type": "Theorem",
  "number": "1.7.8",
  "title": "Splitting field of polynomial.",
  "body": " Splitting field of polynomial   Let be a field. Any nonzero polynomial of degree has a splitting field satisfying .    We proceed by induction on .  Base step: . In this case splits over , in which case the splitting field of is , which satisfies .  Induction step: fix , and assume the result holds for any field and any polynomial over that field of degree . Suppose satisfies . Let be any irreducible factor of over . By the quotient is a field extension of , satisfies , where is a root of , and has degree . Since is a root of , it is also a root of , and we have for some nonzero polynomial , satisfying . By induction there is a splitting field of satisfying . Since splits and contains the root , we have for some and elements . By , the subextension is a splitting field of over and satisfies .   "
},
{
  "id": "cor_splitting_finite",
  "level": "2",
  "url": "s_splitting.html#cor_splitting_finite",
  "type": "Corollary",
  "number": "1.7.9",
  "title": "Splitting field of finite set.",
  "body": " Splitting field of finite set   Let be a field, and let be a finite set of nonzero polynomials. A splitting field of exists.    By , the nonzero polynomial has a splitting field . It is clear that is also a splitting field of .   "
},
{
  "id": "Untitled-1",
  "level": "1",
  "url": "Untitled-1.html",
  "type": "Section",
  "number": "1.8",
  "title": "Algebraic closure",
  "body": " Algebraic closure  An algebraic closure of a field is in a sense an absolute version of the notion of relative algebraic closure introduced in .   Algebraically closed   A field is algebraically closed if all polynomials split completely over .     Algebraically closed  It is easy to see that a field is algebraically closed if and only if all nonconstant polynomials have a root in .    Algebraic closure   An algebraic closure of a field is an extension satisfying the following properties.    is algebraically closed.     is algebraic.            Show that is an algebraic closure of .    Show that is not an algebraic closure of .    Find an algebraic closure of lying within .          We know from the fundamental theorem of algebra that is algebraically closed. Since and is algebraic over , the extension is algebraic. Thus is an algebraic closure of .    Since is not algebraic over ( is transcendental over ), it is not an algebraic closure.    The relative closure is an algebraic closure of . See proof of for details.       The next result articulates the relationship between algebraically closed fields, relative algebraic closure, and algebraic closure.   Algebraically closed and algebraic closure   Let be a field extension and assume is algebraically closed. The relative algebraic closure of in is an algebraic closure of .    We know from that is algebraic over ; we must prove it is algebraically closed.  Let be a nonconstant polynomial. Since is algebraically closed and , there is an element such that : , has a root in . Since , we see that is algebraic over ; it follows from that is algebraic over . Since is algebraic over , it follows from that is algebraic over . Thus is algebraic over , in which case by definition.  We have shown that any nonconstant polynomial has a root in . We conclude (using ) that is algebraically closed, as desired.     Algebraically closed and algebraic closure   Let be a field extension. The following statements are equivalent.    is an algebraic closure of      is the splitting field of the set of all polynomials over .     is algebraic and splits the set of all polynomials over .       Homework exercise.     Algebraic closure exists   Given any field , there is an algebraic closure .    Fix a field . Our proof will make use of the polynomial ring in infinitely many variables , where is a nonconstant polynomial, and . In other words, each pair , where is a nonconstant polynomial and is a positive integer bounded by , is associated with a unique variable . Without getting too technical, the polynomial ring is defined as the set of all finite polynomial combinations of the infinite variable set .  Next we will define an ideal of . For each monic nonconstant polynomial , let . Observe that the coefficients here are polynomials in the variables . With this notation in place we define to be the ideal generated by the polynomials : , . Having assembled all the necessary ingredients, the rest of the proof proceeds as follows:   Show that , and thus is contained in a maximal ideal .    Show that the field is an algebraic extension of that splits .   Once we have shown (2), we conclude from that is an algebraic closure.   Proof:  Assume by contradiction that . This would mean that we have for some and . By there is a splitting field of the . For each , pick a root of and define to be the evaluation map that for each sends for each , where are the roots of ; and which sends all other variables to . We claim that for all . Assuming this is so, we have reached a contradiction since then . To see why the claim ( ) is true, we first extend the map as usual to a map by sending to . For each as in ( ), we have , since we have in . On the other hand, we have . For the polynomial on the right-hand side to be equal to 0 in , we must have the coefficients for all , as claimed.    is algebraic and splits  Since , there is a maximal ideal . Let . As usual, the resriction to of the quotient map is injective, and we identify with its isomorphic image in .  First we show that splits all nonconstant polynomials in . Clearly it suffices to show that splits all nonconstant monic polynomials . To see why this is true, first observe that the quotient map extends to a map of polynomial rings sending to . For each monic nonconstant polynomial , we have , since by definition of we have and thus . It follows that , showing that splits completely in .  Lastly, we show that is algebraic over . Since is generated as a ring over by the , is generated as a ring over by the images . It follows that is generated as a field over by the : , . We saw above that is a root of the polynomial . Thus each is algebraic over . But then is algebraically generated over , and hence algebraic by .      Algebraic closure    Algebraic closure of   As we will see later, an algebraic closure of is unique up to isomorphism . As such, we will often take liberties and speak of the algebraic closure of , and will denote this as .    Splitting field of arbitrary set   Let be a field. Given any set , there is a splitting field of .    Let be an algebraic closure of . Since splits , tells us that the field is a splitting field of , where .    "
},
{
  "id": "d_algebraically_closed",
  "level": "2",
  "url": "Untitled-1.html#d_algebraically_closed",
  "type": "Definition",
  "number": "1.8.1",
  "title": "Algebraically closed.",
  "body": " Algebraically closed   A field is algebraically closed if all polynomials split completely over .   "
},
{
  "id": "rm_alg_closed",
  "level": "2",
  "url": "Untitled-1.html#rm_alg_closed",
  "type": "Remark",
  "number": "1.8.2",
  "title": "Algebraically closed.",
  "body": " Algebraically closed  It is easy to see that a field is algebraically closed if and only if all nonconstant polynomials have a root in .  "
},
{
  "id": "d_algebraic_closure",
  "level": "2",
  "url": "Untitled-1.html#d_algebraic_closure",
  "type": "Definition",
  "number": "1.8.3",
  "title": "Algebraic closure.",
  "body": " Algebraic closure   An algebraic closure of a field is an extension satisfying the following properties.    is algebraically closed.     is algebraic.      "
},
{
  "id": "Untitled-1-6",
  "level": "2",
  "url": "Untitled-1.html#Untitled-1-6",
  "type": "Example",
  "number": "1.8.4",
  "title": "",
  "body": "     Show that is an algebraic closure of .    Show that is not an algebraic closure of .    Find an algebraic closure of lying within .          We know from the fundamental theorem of algebra that is algebraically closed. Since and is algebraic over , the extension is algebraic. Thus is an algebraic closure of .    Since is not algebraic over ( is transcendental over ), it is not an algebraic closure.    The relative closure is an algebraic closure of . See proof of for details.      "
},
{
  "id": "th_alg_closed_closure",
  "level": "2",
  "url": "Untitled-1.html#th_alg_closed_closure",
  "type": "Theorem",
  "number": "1.8.5",
  "title": "Algebraically closed and algebraic closure.",
  "body": " Algebraically closed and algebraic closure   Let be a field extension and assume is algebraically closed. The relative algebraic closure of in is an algebraic closure of .    We know from that is algebraic over ; we must prove it is algebraically closed.  Let be a nonconstant polynomial. Since is algebraically closed and , there is an element such that : , has a root in . Since , we see that is algebraic over ; it follows from that is algebraic over . Since is algebraic over , it follows from that is algebraic over . Thus is algebraic over , in which case by definition.  We have shown that any nonconstant polynomial has a root in . We conclude (using ) that is algebraically closed, as desired.   "
},
{
  "id": "cor_alg_closed_closure",
  "level": "2",
  "url": "Untitled-1.html#cor_alg_closed_closure",
  "type": "Corollary",
  "number": "1.8.6",
  "title": "Algebraically closed and algebraic closure.",
  "body": " Algebraically closed and algebraic closure   Let be a field extension. The following statements are equivalent.    is an algebraic closure of      is the splitting field of the set of all polynomials over .     is algebraic and splits the set of all polynomials over .       Homework exercise.   "
},
{
  "id": "th_alg_closure_exists",
  "level": "2",
  "url": "Untitled-1.html#th_alg_closure_exists",
  "type": "Theorem",
  "number": "1.8.7",
  "title": "Algebraic closure exists.",
  "body": " Algebraic closure exists   Given any field , there is an algebraic closure .    Fix a field . Our proof will make use of the polynomial ring in infinitely many variables , where is a nonconstant polynomial, and . In other words, each pair , where is a nonconstant polynomial and is a positive integer bounded by , is associated with a unique variable . Without getting too technical, the polynomial ring is defined as the set of all finite polynomial combinations of the infinite variable set .  Next we will define an ideal of . For each monic nonconstant polynomial , let . Observe that the coefficients here are polynomials in the variables . With this notation in place we define to be the ideal generated by the polynomials : , . Having assembled all the necessary ingredients, the rest of the proof proceeds as follows:   Show that , and thus is contained in a maximal ideal .    Show that the field is an algebraic extension of that splits .   Once we have shown (2), we conclude from that is an algebraic closure.   Proof:  Assume by contradiction that . This would mean that we have for some and . By there is a splitting field of the . For each , pick a root of and define to be the evaluation map that for each sends for each , where are the roots of ; and which sends all other variables to . We claim that for all . Assuming this is so, we have reached a contradiction since then . To see why the claim ( ) is true, we first extend the map as usual to a map by sending to . For each as in ( ), we have , since we have in . On the other hand, we have . For the polynomial on the right-hand side to be equal to 0 in , we must have the coefficients for all , as claimed.    is algebraic and splits  Since , there is a maximal ideal . Let . As usual, the resriction to of the quotient map is injective, and we identify with its isomorphic image in .  First we show that splits all nonconstant polynomials in . Clearly it suffices to show that splits all nonconstant monic polynomials . To see why this is true, first observe that the quotient map extends to a map of polynomial rings sending to . For each monic nonconstant polynomial , we have , since by definition of we have and thus . It follows that , showing that splits completely in .  Lastly, we show that is algebraic over . Since is generated as a ring over by the , is generated as a ring over by the images . It follows that is generated as a field over by the : , . We saw above that is a root of the polynomial . Thus each is algebraic over . But then is algebraically generated over , and hence algebraic by .    "
},
{
  "id": "Untitled-1-11",
  "level": "2",
  "url": "Untitled-1.html#Untitled-1-11",
  "type": "Notation",
  "number": "1.8.8",
  "title": "Algebraic closure.",
  "body": " Algebraic closure    Algebraic closure of   As we will see later, an algebraic closure of is unique up to isomorphism . As such, we will often take liberties and speak of the algebraic closure of , and will denote this as .  "
},
{
  "id": "cor_alg_closure_exists",
  "level": "2",
  "url": "Untitled-1.html#cor_alg_closure_exists",
  "type": "Corollary",
  "number": "1.8.9",
  "title": "Splitting field of arbitrary set.",
  "body": " Splitting field of arbitrary set   Let be a field. Given any set , there is a splitting field of .    Let be an algebraic closure of . Since splits , tells us that the field is a splitting field of , where .   "
},
{
  "id": "s_finite",
  "level": "1",
  "url": "s_finite.html",
  "type": "Section",
  "number": "1.9",
  "title": "Finite fields",
  "body": " Finite fields  As yet we have only seen two concrete examples of algebraic closure: the extensions and . The first example is about as simple as we could hope for: since , elements of are easily described ( , ), and furthermore there are no nontrivial subextensions of . Contrast this with the situation for and its algebraic closure . We have , there is no standard way of writing an arbitrary element of , and there are infinitely many nontrivial subextensions. Indeed, there are even infinitely many subextensions of degree two!  In this section we will investigate what the algebraic closure of the finite field looks like. Despite this algebraic closure being an infinite one, you will see that we can describe the subextensions of and their interdependence more or less explicitly. As such the example of an algebraic closure occupies a nice middle ground between our previous two examples.  For this section will always denote a prime integer.   Finite fields   Let be an algebraic closure and let be a positive integer.   There is a unique subextension of of degree .    We have .    Let . We have . It follows that is a splitting field of .       The essential tool in the proof of is the Frobenius endomorphism , which we now investigate.   Frobenius endomorphism   Let be a commutative ring of characteristic . The Frobenius endomorphism of is the map .     Frobenius endomorphism   Let be a ring of characteristic , and let be the Frobenius endomorphism.    is a ring homomorphism. In particular, we have for all .    For all positive integers the map is a ring homomorphism and satisfies .       Statement (2) follows easily from (1) and the fact that a composition of ring homomorphisms is a ring homomorphism. We now show that is a ring homomorphism. First observe that . Furthermore, we have . It remains only to show . We have .     First-year exponentiation\/first-year's dream  The bogus claim that or for real numbers , is often called first-year exponentiation , since this is a common mistake in introductory mathematics classes. Accordingly, when working in a ring of characteristic , the amazing fact that for all and all positive integers is sometimes referred to as the first-year's dream .   We are now ready to prove .   Proof of  Fix positive integer . Suppose is a field extension of degree . Since , we have and thus . Next, since is a group of order , we have for all , which implies for all elements (including ). Since has elements, and since has at most distinct roots, we see that we must have . In particular splits and is minimal in this regard (by a counting argument). Thus is a a splitting field of .  So far, we have shown that there can be at most one subfield of of degree , that it is a splitting field of , and that it has the explicit description . Thus it remains to show that (a) the set described by is indeed a subfield of , and (b) that .  It follows easily from the definition that contains and , and is closed under multiplication and inverses. It suffices then to show that is closed under addition. To this end, given , we have . This completes the proof that is a field.  Since is by definition the set of all roots of in , it remains only to show that these roots are distinct : , has no repeated roots. Such polynomials are called separable , and we will have a lot more to say about this property in coming lectures, including some useful tools for proving that a polynomial is separable. We forego these tools for now and instead rely on some algebraic trickery.  Let be a root of . Since , we have , where . Since , we see that is not a root of . Since , and is not a root of , we see that is not a repeated root of , as desired.    Finite fields split minimal polynomials   Let be a finite extension. For all the minimal polynomial splits completely over .    Homework exercise.    Next we show that for all positive integers , any field of cardinality is in fact a simple extension of . To prove this claim, we need the following cute application of the structure theorem of finitely generated abelian groups.   Finite subgroups of are cyclic   Let be a field. Any finite subgroup of , the group of units, is cyclic.    Homework exercise.     Finite fields are simple   If is a finite extension, then for some .    Since is cyclic, we have for some . It follows easily that .     Existence of irreducibles   For all positive integers , there is an irreducible polynomial of of degree .    Fix a positive integer . By there is an extension of degree . By , we have for some . By we have for some irreducible polynomial of degree . In particular, there is at least one irreducible polynomial of degree .     Uniqueness of finite fields   Fix a positive integer . Any two fields of cardinality are isomorphic. In particular, given any two irreducible polynomials of degree , we have .    Fix a positive integer . Let and let be the unique subextension of of cardinality . Given any other field of cardinality , we must have , and hence is a finite extension. By , for some , and thus for some irreducible polynomial of degree . Let be a root of , and let . By , is a ring homomorphism. It follows that , Since , we must have , by the uniqueness claim in . This proves that any field of cardinality is isomorphic to the unique subfield of of cardinality ; we conclude by transitivity that any two such fields are isomorphic.     Field of cardinality    finite field of cardinality   Fix a positive integer , and let . By up to isomorphism there is exactly one field of cardinality . We will use the notation to denote such a field.   We end our investigation of finite fields with a complete description of the subextension structure of .   Subextension structure of   Let be an algebraic closure. For each positive integer , we denote by the unique subfield of of cardinality . Given positive integers and , we have if and only if divides . Using logical shorthand: .    We prove each implication separately.   Implication:  Assume . Applying the tower law to the tower , we see that divides .    Implication:  If , then for some integer . We wish to show the implication . Recall our explicit descriptions of the two fields as subfields of : . Define as , and let . An easy induction argument shows that . Thus we have , as desired.     According to the lattice of subextensions of is effectively identical to the lattice of integers partially ordered by divisibility. This is best illustrated by the portion of this lattice exhibited in .   Lattice of subfields of   Lattice of subfields of Fpbar     "
},
{
  "id": "th_finite_fields",
  "level": "2",
  "url": "s_finite.html#th_finite_fields",
  "type": "Theorem",
  "number": "1.9.1",
  "title": "Finite fields.",
  "body": " Finite fields   Let be an algebraic closure and let be a positive integer.   There is a unique subextension of of degree .    We have .    Let . We have . It follows that is a splitting field of .      "
},
{
  "id": "d_Frobenius",
  "level": "2",
  "url": "s_finite.html#d_Frobenius",
  "type": "Definition",
  "number": "1.9.2",
  "title": "Frobenius endomorphism.",
  "body": " Frobenius endomorphism   Let be a commutative ring of characteristic . The Frobenius endomorphism of is the map .   "
},
{
  "id": "th_Frob",
  "level": "2",
  "url": "s_finite.html#th_Frob",
  "type": "Theorem",
  "number": "1.9.3",
  "title": "Frobenius endomorphism.",
  "body": " Frobenius endomorphism   Let be a ring of characteristic , and let be the Frobenius endomorphism.    is a ring homomorphism. In particular, we have for all .    For all positive integers the map is a ring homomorphism and satisfies .       Statement (2) follows easily from (1) and the fact that a composition of ring homomorphisms is a ring homomorphism. We now show that is a ring homomorphism. First observe that . Furthermore, we have . It remains only to show . We have .   "
},
{
  "id": "s_finite-9",
  "level": "2",
  "url": "s_finite.html#s_finite-9",
  "type": "Remark",
  "number": "1.9.4",
  "title": "First-year exponentiation\/first-year’s dream.",
  "body": " First-year exponentiation\/first-year's dream  The bogus claim that or for real numbers , is often called first-year exponentiation , since this is a common mistake in introductory mathematics classes. Accordingly, when working in a ring of characteristic , the amazing fact that for all and all positive integers is sometimes referred to as the first-year's dream .  "
},
{
  "id": "s_finite-11",
  "level": "2",
  "url": "s_finite.html#s_finite-11",
  "type": "Proof",
  "number": "1.9.1",
  "title": "Proof of Theorem 1.9.1.",
  "body": " Proof of  Fix positive integer . Suppose is a field extension of degree . Since , we have and thus . Next, since is a group of order , we have for all , which implies for all elements (including ). Since has elements, and since has at most distinct roots, we see that we must have . In particular splits and is minimal in this regard (by a counting argument). Thus is a a splitting field of .  So far, we have shown that there can be at most one subfield of of degree , that it is a splitting field of , and that it has the explicit description . Thus it remains to show that (a) the set described by is indeed a subfield of , and (b) that .  It follows easily from the definition that contains and , and is closed under multiplication and inverses. It suffices then to show that is closed under addition. To this end, given , we have . This completes the proof that is a field.  Since is by definition the set of all roots of in , it remains only to show that these roots are distinct : , has no repeated roots. Such polynomials are called separable , and we will have a lot more to say about this property in coming lectures, including some useful tools for proving that a polynomial is separable. We forego these tools for now and instead rely on some algebraic trickery.  Let be a root of . Since , we have , where . Since , we see that is not a root of . Since , and is not a root of , we see that is not a repeated root of , as desired.  "
},
{
  "id": "cor_finite_split_irr",
  "level": "2",
  "url": "s_finite.html#cor_finite_split_irr",
  "type": "Corollary",
  "number": "1.9.5",
  "title": "Finite fields split minimal polynomials.",
  "body": " Finite fields split minimal polynomials   Let be a finite extension. For all the minimal polynomial splits completely over .    Homework exercise.   "
},
{
  "id": "th_field_units_cylic",
  "level": "2",
  "url": "s_finite.html#th_field_units_cylic",
  "type": "Theorem",
  "number": "1.9.6",
  "title": "Finite subgroups of <span class=\"process-math\">\\(K^*\\)<\/span> are cyclic.",
  "body": " Finite subgroups of are cyclic   Let be a field. Any finite subgroup of , the group of units, is cyclic.    Homework exercise.   "
},
{
  "id": "th_finite_cyclic",
  "level": "2",
  "url": "s_finite.html#th_finite_cyclic",
  "type": "Theorem",
  "number": "1.9.7",
  "title": "Finite fields are simple.",
  "body": " Finite fields are simple   If is a finite extension, then for some .    Since is cyclic, we have for some . It follows easily that .   "
},
{
  "id": "cor_finite_irr",
  "level": "2",
  "url": "s_finite.html#cor_finite_irr",
  "type": "Corollary",
  "number": "1.9.8",
  "title": "Existence of irreducibles.",
  "body": " Existence of irreducibles   For all positive integers , there is an irreducible polynomial of of degree .    Fix a positive integer . By there is an extension of degree . By , we have for some . By we have for some irreducible polynomial of degree . In particular, there is at least one irreducible polynomial of degree .   "
},
{
  "id": "cor_finite_unique",
  "level": "2",
  "url": "s_finite.html#cor_finite_unique",
  "type": "Corollary",
  "number": "1.9.9",
  "title": "Uniqueness of finite fields.",
  "body": " Uniqueness of finite fields   Fix a positive integer . Any two fields of cardinality are isomorphic. In particular, given any two irreducible polynomials of degree , we have .    Fix a positive integer . Let and let be the unique subextension of of cardinality . Given any other field of cardinality , we must have , and hence is a finite extension. By , for some , and thus for some irreducible polynomial of degree . Let be a root of , and let . By , is a ring homomorphism. It follows that , Since , we must have , by the uniqueness claim in . This proves that any field of cardinality is isomorphic to the unique subfield of of cardinality ; we conclude by transitivity that any two such fields are isomorphic.   "
},
{
  "id": "s_finite-18",
  "level": "2",
  "url": "s_finite.html#s_finite-18",
  "type": "Notation",
  "number": "1.9.10",
  "title": "Field of cardinality <span class=\"process-math\">\\(q=p^n\\)<\/span>.",
  "body": " Field of cardinality    finite field of cardinality   Fix a positive integer , and let . By up to isomorphism there is exactly one field of cardinality . We will use the notation to denote such a field.  "
},
{
  "id": "th_finite_field_extension_structure",
  "level": "2",
  "url": "s_finite.html#th_finite_field_extension_structure",
  "type": "Theorem",
  "number": "1.9.11",
  "title": "Subextension structure of <span class=\"process-math\">\\(\\Fpbar\\)<\/span>.",
  "body": " Subextension structure of   Let be an algebraic closure. For each positive integer , we denote by the unique subfield of of cardinality . Given positive integers and , we have if and only if divides . Using logical shorthand: .    We prove each implication separately.   Implication:  Assume . Applying the tower law to the tower , we see that divides .    Implication:  If , then for some integer . We wish to show the implication . Recall our explicit descriptions of the two fields as subfields of : . Define as , and let . An easy induction argument shows that . Thus we have , as desired.    "
},
{
  "id": "fig_Fpbar",
  "level": "2",
  "url": "s_finite.html#fig_Fpbar",
  "type": "Figure",
  "number": "1.9.12",
  "title": "",
  "body": " Lattice of subfields of   Lattice of subfields of Fpbar    "
},
{
  "id": "s_embeddings",
  "level": "1",
  "url": "s_embeddings.html",
  "type": "Section",
  "number": "1.10",
  "title": "Field embeddings",
  "body": " Field embeddings  In this question we investigate what looks to be a somewhat technical topic: given a ring homomorphism and a field extension , how do we describe the set of all extensions of to ? An extension is just a ring homomorphism satisfying .   Field embedding   A field embedding (or simply embedding ) is a ring homomorphism between two fields. Such a map is guaranteed to be injective since its kernel is trivial.     Extension of field embedding   Let be a field extension. Given a field embedding , an extension of to is an embedding satisfying . In other words, is an embedding making the following diagram commutative  Diagram of extension of embedding   Here the vertical line between and should be understood as the inclusion map .    Using our new terminology, and essentially immediately imply the following elegant result.   Extensions of embeddings: simple extension   Let be a simple algebraic extension of degree , and let . Given a field embedding , define , and . In other words, is the set of all extensions of to , and is the set of all roots of in .   Given any , the map defined as is an extension of to .    The map defines a bijection between and . In other words, the distinct extensions of to are in bijective correspondence with the roots of in .    We have . In other words, there are at most extensions of to .       First observe that (3) follows from (2) since has at most  roots in . Thus .  Now consider statements (1)-(2). In the special case where is a quotient of a polynomial ring, both statements follow immediately from . We will reduce to this special case by noting that our simple extension is isomorphic to the quotient ring , where , via the isomorphism . The crucial idea will be that since and are isomorphic, the set of extensions of to is in bijection with the set of extensions of to .  In more detail, let and be as stated in the theorem, and let , the set of extensions of to . It is easy to see that the map is a bijection (with inverse ). Statement (1) of the theorem now follows since the map described in is precisely , where is the map , which is an embedding by . Similarly, since the map is a bijection by , the composition is also a bijection; and furthermore this composition satisfies . Thus the map is a bijection, proving (2).     -embedding   Let and be field extensions of . An -embedding of into is an embedding satisfying for all . In other words, an -embedding of is an extension to of the inclusion map . We denote by the set of all -embeddings of into : , . An -isomorphism is an -embedding that is an isomorphism. We also say is an isomorphism over in this case.    Thus an -embedding between field extensions and is just a special case of , where the starting embedding is the inclusion map . This is illustrated by the commutative diagram in .   Diagram of an -embedding   Diagram of F-embedding      -embeddings   For each pair of extensions and compute .    , .     , .       We use throughout.   Let . We have . The only root of in is , and thus the only element of is the map defined as for all . We recognize this embedding as none other than the inclusion map .    As above, we have . The polynomial has three distinct roots in , where . These three roots give rise to exactly three -embeddings , , defined as for all . We conclude that .        -embeddings in towers   Compute .    We break the extension into two simple towers .  We have , which has two roots in . It follows that , where , for all .  Now look at the second subextension . Since , and since has two roots in , for each the embedding has two extensions to : namely and defined as , for all . See for a nice visual synopsis of this argument.  The four embeddings , are easily seen to be distinct. (Compare their values at and .) Furthermore, since is an extension of , and is a -embedding, we have , where is the inclusion map. Thus each is a -embedding of into .  Lastly, we prove that if is a -embedding, then for some , in which case we have . Given , its restriction is a -embedding of into : , . Since , we have for some . Next, since is an extension of to , and since , we must have for some , as claimed.  Unpacking the definitions of the and using the fact that these maps are ring homomorphisms, we find that .   -embeddings and towers   -embeddings and towers       An argument very similar to the one used in can be used to prove the following result.   Extensions of embeddings: finite extension   Let be a field extension of degree . Given a field embedding , there are at most extensions of to .    The proof is by strong induction on .  Base step: . In this case , and the only extension of to is itself. Thus there are in fact exactly extensions in this case.  Strong induction step: let and assume the result holds for all field extensions of degree with . Since , we can find , yielding a tower of extensions . Since , and , we have .  Now, given any extension of , its restriction is an extension of to : and itself is an extension of to . According to , there are at most , possibilities for ; and by strong induction, for each such extension , there are at most extensions of to . Thus is one of at most extensions of , as desired.    "
},
{
  "id": "d_embedding",
  "level": "2",
  "url": "s_embeddings.html#d_embedding",
  "type": "Definition",
  "number": "1.10.1",
  "title": "Field embedding.",
  "body": " Field embedding   A field embedding (or simply embedding ) is a ring homomorphism between two fields. Such a map is guaranteed to be injective since its kernel is trivial.   "
},
{
  "id": "d_embed_ext",
  "level": "2",
  "url": "s_embeddings.html#d_embed_ext",
  "type": "Definition",
  "number": "1.10.2",
  "title": "Extension of field embedding.",
  "body": " Extension of field embedding   Let be a field extension. Given a field embedding , an extension of to is an embedding satisfying . In other words, is an embedding making the following diagram commutative  Diagram of extension of embedding   Here the vertical line between and should be understood as the inclusion map .   "
},
{
  "id": "th_embed_ext_simple",
  "level": "2",
  "url": "s_embeddings.html#th_embed_ext_simple",
  "type": "Theorem",
  "number": "1.10.3",
  "title": "Extensions of embeddings: simple extension.",
  "body": " Extensions of embeddings: simple extension   Let be a simple algebraic extension of degree , and let . Given a field embedding , define , and . In other words, is the set of all extensions of to , and is the set of all roots of in .   Given any , the map defined as is an extension of to .    The map defines a bijection between and . In other words, the distinct extensions of to are in bijective correspondence with the roots of in .    We have . In other words, there are at most extensions of to .       First observe that (3) follows from (2) since has at most  roots in . Thus .  Now consider statements (1)-(2). In the special case where is a quotient of a polynomial ring, both statements follow immediately from . We will reduce to this special case by noting that our simple extension is isomorphic to the quotient ring , where , via the isomorphism . The crucial idea will be that since and are isomorphic, the set of extensions of to is in bijection with the set of extensions of to .  In more detail, let and be as stated in the theorem, and let , the set of extensions of to . It is easy to see that the map is a bijection (with inverse ). Statement (1) of the theorem now follows since the map described in is precisely , where is the map , which is an embedding by . Similarly, since the map is a bijection by , the composition is also a bijection; and furthermore this composition satisfies . Thus the map is a bijection, proving (2).   "
},
{
  "id": "d_F_embedding",
  "level": "2",
  "url": "s_embeddings.html#d_F_embedding",
  "type": "Definition",
  "number": "1.10.4",
  "title": "<span class=\"process-math\">\\(F\\)<\/span>-embedding.",
  "body": " -embedding   Let and be field extensions of . An -embedding of into is an embedding satisfying for all . In other words, an -embedding of is an extension to of the inclusion map . We denote by the set of all -embeddings of into : , . An -isomorphism is an -embedding that is an isomorphism. We also say is an isomorphism over in this case.   "
},
{
  "id": "fig_F_embedding",
  "level": "2",
  "url": "s_embeddings.html#fig_F_embedding",
  "type": "Figure",
  "number": "1.10.5",
  "title": "",
  "body": " Diagram of an -embedding   Diagram of F-embedding    "
},
{
  "id": "s_embeddings-10",
  "level": "2",
  "url": "s_embeddings.html#s_embeddings-10",
  "type": "Example",
  "number": "1.10.6",
  "title": "<span class=\"process-math\">\\(\\Q\\)<\/span>-embeddings.",
  "body": " -embeddings   For each pair of extensions and compute .    , .     , .       We use throughout.   Let . We have . The only root of in is , and thus the only element of is the map defined as for all . We recognize this embedding as none other than the inclusion map .    As above, we have . The polynomial has three distinct roots in , where . These three roots give rise to exactly three -embeddings , , defined as for all . We conclude that .      "
},
{
  "id": "eg_Q_embed_tower",
  "level": "2",
  "url": "s_embeddings.html#eg_Q_embed_tower",
  "type": "Example",
  "number": "1.10.7",
  "title": "<span class=\"process-math\">\\(\\Q\\)<\/span>-embeddings in towers.",
  "body": " -embeddings in towers   Compute .    We break the extension into two simple towers .  We have , which has two roots in . It follows that , where , for all .  Now look at the second subextension . Since , and since has two roots in , for each the embedding has two extensions to : namely and defined as , for all . See for a nice visual synopsis of this argument.  The four embeddings , are easily seen to be distinct. (Compare their values at and .) Furthermore, since is an extension of , and is a -embedding, we have , where is the inclusion map. Thus each is a -embedding of into .  Lastly, we prove that if is a -embedding, then for some , in which case we have . Given , its restriction is a -embedding of into : , . Since , we have for some . Next, since is an extension of to , and since , we must have for some , as claimed.  Unpacking the definitions of the and using the fact that these maps are ring homomorphisms, we find that .   -embeddings and towers   -embeddings and towers      "
},
{
  "id": "cor_emb_ext_finite",
  "level": "2",
  "url": "s_embeddings.html#cor_emb_ext_finite",
  "type": "Corollary",
  "number": "1.10.9",
  "title": "Extensions of embeddings: finite extension.",
  "body": " Extensions of embeddings: finite extension   Let be a field extension of degree . Given a field embedding , there are at most extensions of to .    The proof is by strong induction on .  Base step: . In this case , and the only extension of to is itself. Thus there are in fact exactly extensions in this case.  Strong induction step: let and assume the result holds for all field extensions of degree with . Since , we can find , yielding a tower of extensions . Since , and , we have .  Now, given any extension of , its restriction is an extension of to : and itself is an extension of to . According to , there are at most , possibilities for ; and by strong induction, for each such extension , there are at most extensions of to . Thus is one of at most extensions of , as desired.   "
},
{
  "id": "s_normal",
  "level": "1",
  "url": "s_normal.html",
  "type": "Section",
  "number": "1.11",
  "title": "Normal extensions",
  "body": " Normal extensions   As defined in , a field extension is normal if is the splitting field of some collection of polynomials over . Normal fields satisfy a particularly useful property with respect to extensions of field embeddings that will be important when studying Galois groups: in particular the normal subgroups of these Galois groups.    Uniqueness of splitting fields and algebraic closures   Algebraic extensions of embeddings   Let be an algebraic extension. Given an embedding , where is an algebraically closed field, there is an extension of to .   Extension of embedding to algebraic field      We postpone the proof of this theorem to the end of the section, as it relies on a general version of Zorn's lemma. Two important consequences of are that splitting fields of sets of polynomials and algebraic closures are unique up to isomorphism.   Uniqueness of splitting fields   Let be a field, and let be a collection of polynomials over . Given any splitting fields and of , there is an -isomorphism . In other words, any two splitting fields of are isomorphic over .    Let and be two splitting fields of , and let and be defined as . In other words, and are the sets of all roots of all elements of lying in , respectively . Recall that, being splitting fields, and are both algebraic over and are generated over by the roots of elements of : , we have . Let be an algebraic closure of . Applying to the inclusion map , we get an -embedding .  Extension of inclusion to K   We claim that in fact , in which case restricting the codomain yields an isomorphism . We use the generator descriptions to this end. Consider the image under of the set of all roots of elements of . Since is an -embedding, it is easy to see that . Indeed given , if is a root of , then we have . This argument shows, in general, that for any , maps the roots of in to the roots of in : , restricting to yields an injective function . In fact, this map is a bijection: since both and split completely, we have , and thus since is injective it is also surjective! We conclude that for all polynomials , from whence it follows immediately that .  Lastly, using the fact that , we have , as claimed. The equality above follows pretty much directly from the minimality property of generated fields: , is a field containing and , thus      Uniqueness of algebraic closure   Let be a field. Given any two algebraic closures and , there is an -isomorphism . In other words, any two algebraic closures of are isomorphic over .    By any algebraic closure of is a splitting field of . The result now follows from .      Automorphisms of fields   Automorphisms   A ring isomorphism from a ring to itself is called an automorphism .  Given a field extension , an -embedding that is also an automorphism is called an -automorphism . We denote by the set of all -automorphisms of : , .     Automorphisms of algebraic extensions   Let be an algebraic extension. If is an -embedding, then is an isomorphism.    Homework exercise.     Automorphism  The condition that be algebraic is indeed a necessary one for . Consider by contrast the transcendental extension , where as usual is the field of rational functions over . It is easy to see that the map is an -embedding, but is not surjective, hence not an automorphism.     An field extension is normal if is the splitting field of a collection of polynomials over .     Normal extensions   Let be a field extension, and let be an algebraic closure of . The following statements are equivalent.    is normal.     is algebraic over , and for all , : , .     is algebraic over , and for all the minimal polynomial splits completely over .       Homework exercise.      Zorn's lemma and proof of   The proof of makes us of Zorn's lemma, the statement of which requires some terminology about partially ordered sets .   Partial ordering axioms   Let denote a binary relation on the set . We write to assert that the relation holds between elements . The relation is a partial ordering if it satisfies the following three axioms.   Reflexive (PO1)  For all , we have .    Transitive (PO2)  For all , if and , then .    Antisymmetric (PO3)  For all , if and , then .   A partially ordered set (POSET, for short) is a pair , where is a partial ordering on .     POSETS     The usual less than or equal to relation is a partial ordering on .    Let be a set, and let be the power set of of . The relation defines a partial ordering on .    Let be a set, and let be the power set of of . The relation also defines a partial ordering on .    Recall that an integer divides an integer , written , if there is an integer such that . The relation defines a partial ordering on the set of nonnegative integers .       Upper bounds, maximal elements, chains   Let be a partially ordered set.  An upper bound on a subset is an element such that for all .  An element is maximal if given any , if , then .  A subset is a chain (or totally ordered ) if for all we have or .     Zorn's lemma   Let be a nonempty partially ordered set. If every chain has an upper bound, then has a maximal element: , there is an such that for all , if , then .    Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most introductory set theory texts. We will not give a proof here.    We are ready at last to prove .   Proof of  Assume is algebraic and that is an embedding, with algebraically closed. We apply Zorn's lemma to the partially ordered set , where is the set of all pairs consisting of a subextension of and an extension of the embedding , and where the partial ordering is defined as follows . It is straightforward to show that as defined is a partial ordering of . Our steps are then as follows:   Use Zorn's lemma to show that contains a maximal elmenent with respect to the defined ordering .    Show that .      Proof: has maximal element  First observe that is nonempty. Indeed, the pair is an element of .  Next, let be a chain with respect to . We must show that has an upper bound in . Define as follows: . It is not difficult to show that is a field (being a union of nested fields), that the map is well-defined ( , it doesn't depend on the pair ), and is an extension of . It follows essentially by definition of and that for all . Thus is an upper bound of . Since was arbitrary, we conclude by Zorn's lemma that has a maximal element .    Proof: extension to exists  Let be a maximal element of the partially ordered set . We claim that , in which case is our desired extension of . By definition, . To prove the other inclusion, take any . Since is algebraic over , it is also algebraic over , in which case is an algebraic simple extension. We apply to the embedding . Let . Since is algebraically closed, there is a root of , and hence an extension . Since , and since (by definition of embedding extensions), we see that . Since is maximal with respect to our partial ordering, we conclude that , and hence . In particular, we have , as desired.     "
},
{
  "id": "th_emb_ext_alg",
  "level": "2",
  "url": "s_normal.html#th_emb_ext_alg",
  "type": "Theorem",
  "number": "1.11.1",
  "title": "Algebraic extensions of embeddings.",
  "body": " Algebraic extensions of embeddings   Let be an algebraic extension. Given an embedding , where is an algebraically closed field, there is an extension of to .   Extension of embedding to algebraic field     "
},
{
  "id": "cor_split_unique",
  "level": "2",
  "url": "s_normal.html#cor_split_unique",
  "type": "Corollary",
  "number": "1.11.2",
  "title": "Uniqueness of splitting fields.",
  "body": " Uniqueness of splitting fields   Let be a field, and let be a collection of polynomials over . Given any splitting fields and of , there is an -isomorphism . In other words, any two splitting fields of are isomorphic over .    Let and be two splitting fields of , and let and be defined as . In other words, and are the sets of all roots of all elements of lying in , respectively . Recall that, being splitting fields, and are both algebraic over and are generated over by the roots of elements of : , we have . Let be an algebraic closure of . Applying to the inclusion map , we get an -embedding .  Extension of inclusion to K   We claim that in fact , in which case restricting the codomain yields an isomorphism . We use the generator descriptions to this end. Consider the image under of the set of all roots of elements of . Since is an -embedding, it is easy to see that . Indeed given , if is a root of , then we have . This argument shows, in general, that for any , maps the roots of in to the roots of in : , restricting to yields an injective function . In fact, this map is a bijection: since both and split completely, we have , and thus since is injective it is also surjective! We conclude that for all polynomials , from whence it follows immediately that .  Lastly, using the fact that , we have , as claimed. The equality above follows pretty much directly from the minimality property of generated fields: , is a field containing and , thus    "
},
{
  "id": "cor_alg_closure_unique",
  "level": "2",
  "url": "s_normal.html#cor_alg_closure_unique",
  "type": "Corollary",
  "number": "1.11.3",
  "title": "Uniqueness of algebraic closure.",
  "body": " Uniqueness of algebraic closure   Let be a field. Given any two algebraic closures and , there is an -isomorphism . In other words, any two algebraic closures of are isomorphic over .    By any algebraic closure of is a splitting field of . The result now follows from .   "
},
{
  "id": "d_automorphisms",
  "level": "2",
  "url": "s_normal.html#d_automorphisms",
  "type": "Definition",
  "number": "1.11.4",
  "title": "Automorphisms.",
  "body": " Automorphisms   A ring isomorphism from a ring to itself is called an automorphism .  Given a field extension , an -embedding that is also an automorphism is called an -automorphism . We denote by the set of all -automorphisms of : , .   "
},
{
  "id": "th_embed_isom",
  "level": "2",
  "url": "s_normal.html#th_embed_isom",
  "type": "Theorem",
  "number": "1.11.5",
  "title": "Automorphisms of algebraic extensions.",
  "body": " Automorphisms of algebraic extensions   Let be an algebraic extension. If is an -embedding, then is an isomorphism.    Homework exercise.   "
},
{
  "id": "ss_automorphisms-4",
  "level": "2",
  "url": "s_normal.html#ss_automorphisms-4",
  "type": "Example",
  "number": "1.11.6",
  "title": "Automorphism.",
  "body": " Automorphism  The condition that be algebraic is indeed a necessary one for . Consider by contrast the transcendental extension , where as usual is the field of rational functions over . It is easy to see that the map is an -embedding, but is not surjective, hence not an automorphism.  "
},
{
  "id": "d_normal",
  "level": "2",
  "url": "s_normal.html#d_normal",
  "type": "Definition",
  "number": "1.11.7",
  "title": "",
  "body": "  An field extension is normal if is the splitting field of a collection of polynomials over .   "
},
{
  "id": "th_normal",
  "level": "2",
  "url": "s_normal.html#th_normal",
  "type": "Theorem",
  "number": "1.11.8",
  "title": "Normal extensions.",
  "body": " Normal extensions   Let be a field extension, and let be an algebraic closure of . The following statements are equivalent.    is normal.     is algebraic over , and for all , : , .     is algebraic over , and for all the minimal polynomial splits completely over .       Homework exercise.   "
},
{
  "id": "d_partial_order",
  "level": "2",
  "url": "s_normal.html#d_partial_order",
  "type": "Definition",
  "number": "1.11.9",
  "title": "Partial ordering axioms.",
  "body": " Partial ordering axioms   Let denote a binary relation on the set . We write to assert that the relation holds between elements . The relation is a partial ordering if it satisfies the following three axioms.   Reflexive (PO1)  For all , we have .    Transitive (PO2)  For all , if and , then .    Antisymmetric (PO3)  For all , if and , then .   A partially ordered set (POSET, for short) is a pair , where is a partial ordering on .   "
},
{
  "id": "eg_poset",
  "level": "2",
  "url": "s_normal.html#eg_poset",
  "type": "Example",
  "number": "1.11.10",
  "title": "POSETS.",
  "body": " POSETS     The usual less than or equal to relation is a partial ordering on .    Let be a set, and let be the power set of of . The relation defines a partial ordering on .    Let be a set, and let be the power set of of . The relation also defines a partial ordering on .    Recall that an integer divides an integer , written , if there is an integer such that . The relation defines a partial ordering on the set of nonnegative integers .     "
},
{
  "id": "d_chain",
  "level": "2",
  "url": "s_normal.html#d_chain",
  "type": "Definition",
  "number": "1.11.11",
  "title": "Upper bounds, maximal elements, chains.",
  "body": " Upper bounds, maximal elements, chains   Let be a partially ordered set.  An upper bound on a subset is an element such that for all .  An element is maximal if given any , if , then .  A subset is a chain (or totally ordered ) if for all we have or .   "
},
{
  "id": "th_Zorns_lemma",
  "level": "2",
  "url": "s_normal.html#th_Zorns_lemma",
  "type": "Theorem",
  "number": "1.11.12",
  "title": "Zorn’s lemma.",
  "body": " Zorn's lemma   Let be a nonempty partially ordered set. If every chain has an upper bound, then has a maximal element: , there is an such that for all , if , then .    Zorn's lemma is equivalent to the axiom of choice. You can find a proof of this fact in most introductory set theory texts. We will not give a proof here.   "
},
{
  "id": "ss_emb_ext_alg-8",
  "level": "2",
  "url": "s_normal.html#ss_emb_ext_alg-8",
  "type": "Proof",
  "number": "1",
  "title": "Proof of Theorem 1.11.1.",
  "body": " Proof of  Assume is algebraic and that is an embedding, with algebraically closed. We apply Zorn's lemma to the partially ordered set , where is the set of all pairs consisting of a subextension of and an extension of the embedding , and where the partial ordering is defined as follows . It is straightforward to show that as defined is a partial ordering of . Our steps are then as follows:   Use Zorn's lemma to show that contains a maximal elmenent with respect to the defined ordering .    Show that .      Proof: has maximal element  First observe that is nonempty. Indeed, the pair is an element of .  Next, let be a chain with respect to . We must show that has an upper bound in . Define as follows: . It is not difficult to show that is a field (being a union of nested fields), that the map is well-defined ( , it doesn't depend on the pair ), and is an extension of . It follows essentially by definition of and that for all . Thus is an upper bound of . Since was arbitrary, we conclude by Zorn's lemma that has a maximal element .    Proof: extension to exists  Let be a maximal element of the partially ordered set . We claim that , in which case is our desired extension of . By definition, . To prove the other inclusion, take any . Since is algebraic over , it is also algebraic over , in which case is an algebraic simple extension. We apply to the embedding . Let . Since is algebraically closed, there is a root of , and hence an extension . Since , and since (by definition of embedding extensions), we see that . Since is maximal with respect to our partial ordering, we conclude that , and hence . In particular, we have , as desired.   "
},
{
  "id": "s_separable_I",
  "level": "1",
  "url": "s_separable_I.html",
  "type": "Section",
  "number": "1.12",
  "title": "Separability",
  "body": " Separability   Multiplicity of roots   Let be an algebraic closure of . Given a nonzero polynomial , we can factor in the form where for all : , the are the distinct roots of in . For each , we call the power the multiplicity of the root . The root is called a simple root if ; it is called a repeated root if .     Multiplicity of roots  The multiplicities appearing in do not depend on the choice of algebraic closure of . That is, if are two algebraic closures of , and if factors over as in , then factors over as , where the are distinct.    Separable polynomial   Let be a field. A nonzero polynomial is separable if all its roots (in some algebraic closure of ) are simple. Equivalently, is separable if has has distinct roots. A nonzero polynomial is inseparable if it is not separable.     Separable polynomial  Let be the algebraic closure of in . The polynomials and are separable polynomials of since they factor into as over . (Note: .)  The polynomial is not separable as it has a repeated root: .    Polynomial derivative   Let be a field. Given a polynomial , we definite its derivative  to be the polynomial .     Polynomial derivative  Using induction on degree, you can show that the polynomial derivative operator satisfies the same arithmetic laws as the derivative operator from calculus. In other words, we have .    Separability and derivative   Let be a field. A nonconstant polynomial is separable if and only if and are relatively prime. Using logical shorthand: .    We prove each implication separately. Let be an algebraic closure of .  For the forward direction, assume is separable. We will show that and have no common linear factor over , from whence it follows that they have no common nonconstant factor over . To this end, suppose we have . Since is separable, the root is simple, and hence . But then we have in which case , since is not a root of . Thus and have no common roots, and hence no common linear factor, as desired.  For the reverse implication, assume and are relatively prime. Recall that this is equivalent to as ideals in , in which case we have for some . Suppose by contradiction that is not separable, and that is a repeated root. We can factor over as for some , in which case Thus is a common root of and over . But this is a contradiction since then we'd have . We conclude that is separable, as desired.     Separability and derivative   Let be a prime integer. Use to prove that the polynomial is separable.    We have , since . Since is a unit in , it follows that .     Separability and derivative   Let be a field. Show that is separable if and only if . In particular, if , then is separable.         Separable irreducible   Let be a field. An irreducible polynomial is separable if and only if .    By , is separable if and only if ; so it suffices to show that for an irreducible polynomial, if and only if .  Assume is irreducible. Since , we see that either , or . Since the only factors of , up to multiplication by units, are and , we see that or . Since implies , we see that the second condition attains if and only if . Equivalently, if and only if .     Separable irreducible in characteristic zero   Let be a field of characteristic zero. If is irreducible, then is separable.    If is irreducible, we have , with , in which case . The result now follows from .     Separable irreducible in characteristic   Let be a field of prime characteristic . Assume further that the Frobenius morphism is surjective: , for all , there is an such that .  If is irreducible, then is separable.    Let be irreducible and suppose by contradiction that is inseparable. By , we must have . Since , for a positive integer and , we have if and only if or . It follows that in order for , we must have . Since the Frobenius map is surjective, there are elements satisfying for all . But then we have , in which case is not irreducible. Contradiction!     Separable irreducible in finite fields   If is a finite field, then every irreducible polynomial is separable.    We have seen that the Frobenius map is a field embedding, hence injective. Since , it follows automatically that is surjective. The result now follows from .    "
},
{
  "id": "d_multiplicity",
  "level": "2",
  "url": "s_separable_I.html#d_multiplicity",
  "type": "Definition",
  "number": "1.12.1",
  "title": "Multiplicity of roots.",
  "body": " Multiplicity of roots   Let be an algebraic closure of . Given a nonzero polynomial , we can factor in the form where for all : , the are the distinct roots of in . For each , we call the power the multiplicity of the root . The root is called a simple root if ; it is called a repeated root if .   "
},
{
  "id": "rm_multiplicity",
  "level": "2",
  "url": "s_separable_I.html#rm_multiplicity",
  "type": "Remark",
  "number": "1.12.2",
  "title": "Multiplicity of roots.",
  "body": " Multiplicity of roots  The multiplicities appearing in do not depend on the choice of algebraic closure of . That is, if are two algebraic closures of , and if factors over as in , then factors over as , where the are distinct.  "
},
{
  "id": "d_sep_poly",
  "level": "2",
  "url": "s_separable_I.html#d_sep_poly",
  "type": "Definition",
  "number": "1.12.3",
  "title": "Separable polynomial.",
  "body": " Separable polynomial   Let be a field. A nonzero polynomial is separable if all its roots (in some algebraic closure of ) are simple. Equivalently, is separable if has has distinct roots. A nonzero polynomial is inseparable if it is not separable.   "
},
{
  "id": "s_separable_I-5",
  "level": "2",
  "url": "s_separable_I.html#s_separable_I-5",
  "type": "Example",
  "number": "1.12.4",
  "title": "Separable polynomial.",
  "body": " Separable polynomial  Let be the algebraic closure of in . The polynomials and are separable polynomials of since they factor into as over . (Note: .)  The polynomial is not separable as it has a repeated root: .  "
},
{
  "id": "d_poly_der",
  "level": "2",
  "url": "s_separable_I.html#d_poly_der",
  "type": "Definition",
  "number": "1.12.5",
  "title": "Polynomial derivative.",
  "body": " Polynomial derivative   Let be a field. Given a polynomial , we definite its derivative  to be the polynomial .   "
},
{
  "id": "s_separable_I-7",
  "level": "2",
  "url": "s_separable_I.html#s_separable_I-7",
  "type": "Remark",
  "number": "1.12.6",
  "title": "Polynomial derivative.",
  "body": " Polynomial derivative  Using induction on degree, you can show that the polynomial derivative operator satisfies the same arithmetic laws as the derivative operator from calculus. In other words, we have .  "
},
{
  "id": "th_sep_poly",
  "level": "2",
  "url": "s_separable_I.html#th_sep_poly",
  "type": "Theorem",
  "number": "1.12.7",
  "title": "Separability and derivative.",
  "body": " Separability and derivative   Let be a field. A nonconstant polynomial is separable if and only if and are relatively prime. Using logical shorthand: .    We prove each implication separately. Let be an algebraic closure of .  For the forward direction, assume is separable. We will show that and have no common linear factor over , from whence it follows that they have no common nonconstant factor over . To this end, suppose we have . Since is separable, the root is simple, and hence . But then we have in which case , since is not a root of . Thus and have no common roots, and hence no common linear factor, as desired.  For the reverse implication, assume and are relatively prime. Recall that this is equivalent to as ideals in , in which case we have for some . Suppose by contradiction that is not separable, and that is a repeated root. We can factor over as for some , in which case Thus is a common root of and over . But this is a contradiction since then we'd have . We conclude that is separable, as desired.   "
},
{
  "id": "s_separable_I-9",
  "level": "2",
  "url": "s_separable_I.html#s_separable_I-9",
  "type": "Example",
  "number": "1.12.8",
  "title": "Separability and derivative.",
  "body": " Separability and derivative   Let be a prime integer. Use to prove that the polynomial is separable.    We have , since . Since is a unit in , it follows that .   "
},
{
  "id": "s_separable_I-10",
  "level": "2",
  "url": "s_separable_I.html#s_separable_I-10",
  "type": "Example",
  "number": "1.12.9",
  "title": "Separability and derivative.",
  "body": " Separability and derivative   Let be a field. Show that is separable if and only if . In particular, if , then is separable.       "
},
{
  "id": "th_sep_irr",
  "level": "2",
  "url": "s_separable_I.html#th_sep_irr",
  "type": "Theorem",
  "number": "1.12.10",
  "title": "Separable irreducible.",
  "body": " Separable irreducible   Let be a field. An irreducible polynomial is separable if and only if .    By , is separable if and only if ; so it suffices to show that for an irreducible polynomial, if and only if .  Assume is irreducible. Since , we see that either , or . Since the only factors of , up to multiplication by units, are and , we see that or . Since implies , we see that the second condition attains if and only if . Equivalently, if and only if .   "
},
{
  "id": "cor_sep_irr_char_0",
  "level": "2",
  "url": "s_separable_I.html#cor_sep_irr_char_0",
  "type": "Corollary",
  "number": "1.12.11",
  "title": "Separable irreducible in characteristic zero.",
  "body": " Separable irreducible in characteristic zero   Let be a field of characteristic zero. If is irreducible, then is separable.    If is irreducible, we have , with , in which case . The result now follows from .   "
},
{
  "id": "cor_sep_irr_char_p",
  "level": "2",
  "url": "s_separable_I.html#cor_sep_irr_char_p",
  "type": "Corollary",
  "number": "1.12.12",
  "title": "Separable irreducible in characteristic <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": " Separable irreducible in characteristic   Let be a field of prime characteristic . Assume further that the Frobenius morphism is surjective: , for all , there is an such that .  If is irreducible, then is separable.    Let be irreducible and suppose by contradiction that is inseparable. By , we must have . Since , for a positive integer and , we have if and only if or . It follows that in order for , we must have . Since the Frobenius map is surjective, there are elements satisfying for all . But then we have , in which case is not irreducible. Contradiction!   "
},
{
  "id": "cor_sep_irr_finite",
  "level": "2",
  "url": "s_separable_I.html#cor_sep_irr_finite",
  "type": "Corollary",
  "number": "1.12.13",
  "title": "Separable irreducible in finite fields.",
  "body": " Separable irreducible in finite fields   If is a finite field, then every irreducible polynomial is separable.    We have seen that the Frobenius map is a field embedding, hence injective. Since , it follows automatically that is surjective. The result now follows from .   "
},
{
  "id": "s_separable_II",
  "level": "1",
  "url": "s_separable_II.html",
  "type": "Section",
  "number": "1.13",
  "title": "Separable extensions",
  "body": " Separable extensions   Separable extension   Let be a field extension. An element is separable over if and only if it satisfies a separable polynomial .  The extension is separable over if all elements of are separable over .     Separable is algebraic  Observe that by definition a separable extension is algebraic.    Separable minimal polynomial   Let be a field extension. An element is separable over if and only if its minimal polynomial is separable over . Using logical shorthand: .     Separable minimal polynomial   will come in handy in many theoretical contexts, but when it comes down to showing a given element of a field extension is separable over , the definition of separability can be more convenient.  As an example, suppose satisfies the polynomial , where . Using , it is easy to see that is separable, since , and thus clearly . If instead we tried to use , we would have to hunt around for the minimal polynomial of , which in general is pretty tricky to find.    Separable families of extensions   Let be an algebraic field extension.   If , then is separable over .    If and the Frobenius map is surjective on , then is separable over .       These are immediate consequences of , , and .     Separable finite extensions   Let be a finite field extension of degree . The following statements are equivalent.   Separable   is separable.    Separably generated   where each is separable over .    Maximal separable degree  For any embedding , with algebraically closed, there are exactly extensions of to .        Separability is strongly transitive   Let be a tower of algebraic field extensions. The extension is separable if and only if and are both separable. Using logical shorthand: .     Separable is separably generated   A field extension is separable if and only if there is a set of separable elements such that . In plain English: an extension is separable if and only if it is separably generated.     Primitive element theorem   Let be a finite separable extension. There is an element such that . Using logical shorthand: .    "
},
{
  "id": "d_sep_ext",
  "level": "2",
  "url": "s_separable_II.html#d_sep_ext",
  "type": "Definition",
  "number": "1.13.1",
  "title": "Separable extension.",
  "body": " Separable extension   Let be a field extension. An element is separable over if and only if it satisfies a separable polynomial .  The extension is separable over if all elements of are separable over .   "
},
{
  "id": "s_separable_II-3",
  "level": "2",
  "url": "s_separable_II.html#s_separable_II-3",
  "type": "Remark",
  "number": "1.13.2",
  "title": "Separable is algebraic.",
  "body": " Separable is algebraic  Observe that by definition a separable extension is algebraic.  "
},
{
  "id": "th_sep_min",
  "level": "2",
  "url": "s_separable_II.html#th_sep_min",
  "type": "Theorem",
  "number": "1.13.3",
  "title": "Separable minimal polynomial.",
  "body": " Separable minimal polynomial   Let be a field extension. An element is separable over if and only if its minimal polynomial is separable over . Using logical shorthand: .   "
},
{
  "id": "s_separable_II-5",
  "level": "2",
  "url": "s_separable_II.html#s_separable_II-5",
  "type": "Remark",
  "number": "1.13.4",
  "title": "Separable minimal polynomial.",
  "body": " Separable minimal polynomial   will come in handy in many theoretical contexts, but when it comes down to showing a given element of a field extension is separable over , the definition of separability can be more convenient.  As an example, suppose satisfies the polynomial , where . Using , it is easy to see that is separable, since , and thus clearly . If instead we tried to use , we would have to hunt around for the minimal polynomial of , which in general is pretty tricky to find.  "
},
{
  "id": "th_sep_ext_egs",
  "level": "2",
  "url": "s_separable_II.html#th_sep_ext_egs",
  "type": "Theorem",
  "number": "1.13.5",
  "title": "Separable families of extensions.",
  "body": " Separable families of extensions   Let be an algebraic field extension.   If , then is separable over .    If and the Frobenius map is surjective on , then is separable over .       These are immediate consequences of , , and .   "
},
{
  "id": "th_sep_fin_ext",
  "level": "2",
  "url": "s_separable_II.html#th_sep_fin_ext",
  "type": "Theorem",
  "number": "1.13.6",
  "title": "Separable finite extensions.",
  "body": " Separable finite extensions   Let be a finite field extension of degree . The following statements are equivalent.   Separable   is separable.    Separably generated   where each is separable over .    Maximal separable degree  For any embedding , with algebraically closed, there are exactly extensions of to .      "
},
{
  "id": "cor_sep_strong_trans",
  "level": "2",
  "url": "s_separable_II.html#cor_sep_strong_trans",
  "type": "Corollary",
  "number": "1.13.7",
  "title": "Separability is strongly transitive.",
  "body": " Separability is strongly transitive   Let be a tower of algebraic field extensions. The extension is separable if and only if and are both separable. Using logical shorthand: .   "
},
{
  "id": "cor_sep_gen",
  "level": "2",
  "url": "s_separable_II.html#cor_sep_gen",
  "type": "Corollary",
  "number": "1.13.8",
  "title": "Separable is separably generated.",
  "body": " Separable is separably generated   A field extension is separable if and only if there is a set of separable elements such that . In plain English: an extension is separable if and only if it is separably generated.   "
},
{
  "id": "th_sep_prim_elem",
  "level": "2",
  "url": "s_separable_II.html#th_sep_prim_elem",
  "type": "Theorem",
  "number": "1.13.9",
  "title": "Primitive element theorem.",
  "body": " Primitive element theorem   Let be a finite separable extension. There is an element such that . Using logical shorthand: .   "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory",
  "body": " Theory   "
},
{
  "id": "appendix-procs",
  "level": "1",
  "url": "appendix-procs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Procedures",
  "body": " Procedures   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "E",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-fiats",
  "level": "1",
  "url": "appendix-fiats.html",
  "type": "Appendix",
  "number": "F",
  "title": "Mantras and fiats",
  "body": " Mantras and fiats   "
},
{
  "id": "kursobjekt-6-7",
  "level": "1",
  "url": "kursobjekt-6-7.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
