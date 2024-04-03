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
  "body": " Simple extensions   Simple extension   Let be a field extension. A subextension is called a simple extension of if for some .  In plain English, a simple extension of is one generated over by a single element.     Generated fields convention   Let be a field. In order to speak of a field of the form or , we technically need to introduce a larger ambient field where these elements and are drawn from.  In situations where this ambient field does not play an important role, we reserve the right to omit it from our discussion. For example, if introducing a simple field extension without further details, it is assumed that in fact for some larger field .     Simple extensions     The extension is simple, since .    For any field , the field of rational functions in one variable is a simple field extension of .  On the other hand it is possible to show that the field of rational functions in two variables is not simple: , we do not have for any rational function .       Generated ring versus generated field   Let be a field extension, and let . Recall that denotes the subring of generated by over .         if and only if is a field.          By definition is the intersection of all sub rings containing and , and thus is a subset of which is, the intersection of all sub fields containing and .    Clearly, if , then is a field. Assume on the other hand that is a field. Since is a field containing and , and since is the smallest such field, we have . But by (1) we always have . Thus .        Quotients of polynomial rings  Let be a field, let be a nonconstant polynomial in , and let be the corresponding quotient ring homomorphism.   Since , we have , and hence the restriction of to is injective. As such , and we identify with its isomorphic image .    Given we denote for short. We have .       Maps between polynomial rings  A ring homomorphism extends naturally to a ring homomorphism that sends an -polynomial to the -polynomial . By abuse of notation, we will also denote this map of polynonmial rings as . Thus, given we will write .    Quotients of polynomial rings   Let be a field and let be a nonconstant polynomial in . Following , given , we denote by its image in under the quotient map.   Simply generated  We have : , is generated over as a ring by , the image of under the quotient map.    Dimension  Let . The set is a basis of as a vector space over , and thus .    Mapping property  Let be a nonzero ring. The set of all ring homomorphisms is in bijective correspondence with pairs where is a ring homomorphism and is a root of . Indeed, given such a pair , we define .       The proof of this result relies on various bits of theory from general ring theory. It is left as an (excellent) exercises.     Quotients of polynomial rings   Let be a field, let be an irreducible polynomial of degree , and let . Following , we identify with its image in under the quotient map.    is a field and the extension is simple. In fact, we have .    We have .       The corollary is a direct consequence of .     Field of cardinality four   Let . Prove that is a field of cardinality four.    Denote . Since , it is irreducible over if and only if it has a root in . Since , we see that is irreducible. Using , we conclude that is field, and that is a basis of over . It follows that every element of can be uniquely expressed as , with . There are exactly four such expressions: .     Quotients of   Let be any irreducible quadratic polynomial. Prove that .    Since is irreducible, the quotient is a field. Since , we have . Let be a root of . Using , the map defined as is a ring homomorphism. Furthermore, since is a field, the map is injective, and thus we have . We claim . This is a result of the fact that is a linear transformation of -vector spaces: , for any and , we have , as you can easily check. It then follows that as -vector spaces, and thus that . Since and , we conclude that .     Algebraic and transcendental elements   Let be a field extension. An element is algebraic over if there is a nonzero polynomial such that ; an element is transcendental over if it is not algebraic over .     Some transcendental elements of  In this course we will take for granted that the real numbers and are transcendental over . It is in fact not exceedingly difficult to prove this, though the proofs tend to be somewhat long.  It is a little easier to show, using Liouville's theorem (from number theory), that the real number is transcendental over .    Uncountably many transcendental numbers   Consider the field extension . We will show that in fact contains uncountably many elements that are transcendental over . (The argument below is originally due to Cantor, Godfather of uncountability arguments.)    Let , so that is the disjoint union of and . We will show that the set is countable, from whence it follows that must be uncountable, since is uncountable.  So why is countable? Each element of is the root of a polynomial . First we show that the set is countable. This is because , where is the set of all rational polynomials of degree at most . Each set is countable ( is in bijection with , which is countable), and thus , being a countable union of countable sets, is countable. Lastly, we have , where is the set of all roots of . Since each is finite, and since is countable, we see that is a countable union of finite sets, and hence is countable.     Simple extensions   Let be a field extension and let .   The following statements are equivalent.    is algebraic.     for some irreducible polynomial .     is finite: , .   Furthermore, when is algebraic, there is a basis of of the form .    The following statements are equivalent.    is transcendental.     and .     is infinite: , .          The key to proving both statements of the theorem is to understand the evaluation at ring homomorphism . Note first that we have , which implies is a prime ideal of (since is an integral domain). It follows that or for some irreducible polynomial . Furthermore, since . we see immediately that the element is transcendental if and only if if and only if is injective. Similarly, is algebraic if and only if for some irreducible polynomial .  Lastly, observe that , the subring of generated over by .  Having given a rather thorough analysis of we are ready to prove statements (1) and (2).   Proof of (1)  We have , where the last equivalence uses the fact that if and only if is a field. ( ) This proves (i) (ii).  Next, (ii) (iii) since if is irreducible, the quotient is a finite field extension of of degree .  Lastly (iii) (i) since if , then the set must be linearly dependent, in which case there is a nontrivial linear combination . But then we have , where is the nonzero polynomial . Thus is algebraic, as desired.    Proof of (2)  First observe that the equivalence (i) (iii) follows from (1) above simply by taking negations. Furthermore, we have (ii) (iii) since , as we saw in . Thus it remains only to show (i) (ii).  Assume is transcendental. We saw above that this is equivalent to our evaluation map being injective. Thus we have . Since , we may use to get an injective map . Thus is a subfield of containing and . Since in turn any field containing and must also contain all elements of the form , where and are polynomials, we see that in fact the smallest such field: , we have , as desired.      Minimal polynomial   Let be a field extension, let be algebraic, and let be the evaluation at map. There is a unique polynomial satisfying the following equivalent conditions.    is monic and satisfies .     is a monic polynomial of minimal degree satisfying .     is a monic irreducible polynomial satisfying .         Minimal polynomial   Let be a field extension, and let be algebraic. The unique monic polynomial satisfying the three equivalent conditions of is called the minimal polynomial (or irreducible polynomial ) of over , and is denoted , or just if the base field is understood.  The degree of the algebraic element over , denoted , is defined as the degree of the minimal polynomial of : , .     Minimal poylnomial   Let be a field extension, and let be an algebraic element with minimal polynomial .   Let . The set is an -basis of , and thus .    Given , we have if and only if . In particular, if , then is one of the monic irreducible factors of .          This follows from the fact that , according to .    Let be the kernel of the evaluation at map . By , we have . We conclude that , as desired.        Minimal polynomials for  Consider the field extension and the element . Since is a root of of the polynomial , and since this polynomial is irreducible over and monic over , we have   More generally, given any , since is the root of , and since is not the root of any linear polynomial (since ), we see that .    Minimal polynomial of root of unity   Consider the extension , and let , a primitive -th root of unity.   Compute .    Compute .          Following , we have .    Since , we have , where . According to , the minimal polynomial of is one of the monic irreducible polynomials appearing in the factorization of over . Let's factor: . It is not difficult to show that is irreducible over . (By Gauss's lemma we need only show that it is irreducible over .) Since is not a root of , , or (whose roots are ), we conclude that .       "
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
  "body": " Maps between polynomial rings  A ring homomorphism extends naturally to a ring homomorphism that sends an -polynomial to the -polynomial . By abuse of notation, we will also denote this map of polynonmial rings as . Thus, given we will write .  "
},
{
  "id": "th_quot_poly",
  "level": "2",
  "url": "s_simple_extension.html#th_quot_poly",
  "type": "Theorem",
  "number": "1.4.7",
  "title": "Quotients of polynomial rings.",
  "body": " Quotients of polynomial rings   Let be a field and let be a nonconstant polynomial in . Following , given , we denote by its image in under the quotient map.   Simply generated  We have : , is generated over as a ring by , the image of under the quotient map.    Dimension  Let . The set is a basis of as a vector space over , and thus .    Mapping property  Let be a nonzero ring. The set of all ring homomorphisms is in bijective correspondence with pairs where is a ring homomorphism and is a root of . Indeed, given such a pair , we define .       The proof of this result relies on various bits of theory from general ring theory. It is left as an (excellent) exercises.   "
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
  "id": "s_simple_extension-14",
  "level": "2",
  "url": "s_simple_extension.html#s_simple_extension-14",
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
  "id": "th_min_poly",
  "level": "2",
  "url": "s_simple_extension.html#th_min_poly",
  "type": "Theorem",
  "number": "1.4.15",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let be a field extension, let be algebraic, and let be the evaluation at map. There is a unique polynomial satisfying the following equivalent conditions.    is monic and satisfies .     is a monic polynomial of minimal degree satisfying .     is a monic irreducible polynomial satisfying .       "
},
{
  "id": "d_min_poly",
  "level": "2",
  "url": "s_simple_extension.html#d_min_poly",
  "type": "Definition",
  "number": "1.4.16",
  "title": "Minimal polynomial.",
  "body": " Minimal polynomial   Let be a field extension, and let be algebraic. The unique monic polynomial satisfying the three equivalent conditions of is called the minimal polynomial (or irreducible polynomial ) of over , and is denoted , or just if the base field is understood.  The degree of the algebraic element over , denoted , is defined as the degree of the minimal polynomial of : , .   "
},
{
  "id": "cor_min_poly",
  "level": "2",
  "url": "s_simple_extension.html#cor_min_poly",
  "type": "Corollary",
  "number": "1.4.17",
  "title": "Minimal poylnomial.",
  "body": " Minimal poylnomial   Let be a field extension, and let be an algebraic element with minimal polynomial .   Let . The set is an -basis of , and thus .    Given , we have if and only if . In particular, if , then is one of the monic irreducible factors of .          This follows from the fact that , according to .    Let be the kernel of the evaluation at map . By , we have . We conclude that , as desired.      "
},
{
  "id": "eg_min_poly_R",
  "level": "2",
  "url": "s_simple_extension.html#eg_min_poly_R",
  "type": "Example",
  "number": "1.4.18",
  "title": "Minimal polynomials for <span class=\"process-math\">\\(\\C\/\\R\\)<\/span>.",
  "body": " Minimal polynomials for  Consider the field extension and the element . Since is a root of of the polynomial , and since this polynomial is irreducible over and monic over , we have   More generally, given any , since is the root of , and since is not the root of any linear polynomial (since ), we see that .  "
},
{
  "id": "eg_min_poly_Q",
  "level": "2",
  "url": "s_simple_extension.html#eg_min_poly_Q",
  "type": "Example",
  "number": "1.4.19",
  "title": "Minimal polynomial of root of unity.",
  "body": " Minimal polynomial of root of unity   Consider the extension , and let , a primitive -th root of unity.   Compute .    Compute .          Following , we have .    Since , we have , where . According to , the minimal polynomial of is one of the monic irreducible polynomials appearing in the factorization of over . Let's factor: . It is not difficult to show that is irreducible over . (By Gauss's lemma we need only show that it is irreducible over .) Since is not a root of , , or (whose roots are ), we conclude that .      "
},
{
  "id": "s_algebraic",
  "level": "1",
  "url": "s_algebraic.html",
  "type": "Section",
  "number": "1.5",
  "title": "Algebraic extensions",
  "body": " Algebraic extensions   Finitely generated   Let be a field extension. We say is finitely generated over if we have for some finite set .     Algebraic extension   Let be a field extension. We say is algebraic over if all elements of are algebraic over .     Algebraic extensions  The extension is not algebraic, since is transcendental over .  The extension is algebraic. As we have shown previously, any element satisfies the quadratic polynomial .    Simple extension with algebraic generator   Let , where is algebraic. Prove that is algebraic over .    According to , we have for some finite . It follows that given any , the set is linearly dependent, since it has more than elements ( , street smarts ). Thus there is a nontrivial linear combination . In other words, we have , where . This proves is algebraic, as desired.    The main result of this section is , which both generalizes and gives a full characterization of finite extensions in terms of finitely generated and algebraic field extensions. First we treat the tower law , which will be instrumental in proving , and is also quite useful in its own right.   Tower law   Let be a tower of (possibly infinite) field extensions.   If is a basis of and is a basis of as a -vector space, then the set is a basis of as an -vector space.    We have .         Tower law  Statement (1) of is just as important as (2), as it gives us a procedure for building a basis for from bases of and of : namely, we simply take the set of all products of elements in and .    Tower law: infinite extensions  The formula is true even when one or more of the field extensions involved is infinite, using the following rules from extended arithmetic : . Equivalently, we can interpret as stating that the extension is infinite if and only if is infinite or is infinite.    Tower law   Let be a field extension.   If is a subextension of , then and .    Given a tower of extensions , we have .        Tower law  Use the tower law to prove that the field extension has no nontrivial subextension : , if , then or .    Finite extension theorem   Let be a field extension. The following statements are equivalent.    is finite.     is finitely generated and algebraic.     , where is algebraic over . In other words, is generated over by finitely many algebraic elements.       We prove the cycle of implications (1) (2) (3)\\implies (1)   Implication: (1) (2)  Assume is finite, of dimension .   We claim is finitely generated. Let be a basis of as an -vector space. Since , we have . It follows that , and hence is finitely generated (by the elements ). Indeed, since is a subfield of containing and for all , it must contain all -linear combinations of the . But then we have , and conclude that .    We claim that is algebraic. Take any . Since , the set , consisting of elements, is linearly independent. (Street smarts!) Thus there is a nontrivial linear combination , where for all . It follows that the -polynomial is nonzero and satisfies . Thus is algebraic over , as desired.       Implication: (2) (3)  Assume is finitely generated and algebraic. Since is finitely generated, there are elements such that . Since is algebraic, each element is algebraic over . Thus , and each is algebraic over , as desired.    Implication: (3) (1)  We will show that any field extension generated by finitely many algebraic elements is finite. The proof will proceed by induction on the number of generators of the field.  Base step: . Assume , where is algebraic over . By , we have . Thus is finite.  Induction step: assume any field extension generated over the base field by algebraic elements is a finite extension. Now suppose we have , where each is algebraic over . If for all , then , in which case is finite over . Otherwise, we may assume without loss of generality that . Since is algebraic over , the extension is finite by the base step. Let . We have a tower of fields , and thus by the tower law , the extension is finite if and only if is finite and is finite. We know already that is finite over . As for the extension it is easy to see that . Furthermore, since each is satisfies a nonzero polynomial , we see that each is algebraic over . Thus the extension is generated over by the algebraic elements . By induction is finite. The tower law now implies that is finite.      Finite extension theorem  As we saw in the proof of , given a field extension the following implications hold: . On the other hand, neither of these implications goes the other way. That is, we have . In other words, taken singly, neither of these two properties (finitely generated, algebraic) is strong enough to imply the property of being finite. tells us that the two properties taken together are in fact equivalent to being finite: , .   "
},
{
  "id": "d_fin_gen",
  "level": "2",
  "url": "s_algebraic.html#d_fin_gen",
  "type": "Definition",
  "number": "1.5.1",
  "title": "Finitely generated.",
  "body": " Finitely generated   Let be a field extension. We say is finitely generated over if we have for some finite set .   "
},
{
  "id": "d_algebraic",
  "level": "2",
  "url": "s_algebraic.html#d_algebraic",
  "type": "Definition",
  "number": "1.5.2",
  "title": "Algebraic extension.",
  "body": " Algebraic extension   Let be a field extension. We say is algebraic over if all elements of are algebraic over .   "
},
{
  "id": "eg_alg_ext",
  "level": "2",
  "url": "s_algebraic.html#eg_alg_ext",
  "type": "Example",
  "number": "1.5.3",
  "title": "Algebraic extensions.",
  "body": " Algebraic extensions  The extension is not algebraic, since is transcendental over .  The extension is algebraic. As we have shown previously, any element satisfies the quadratic polynomial .  "
},
{
  "id": "eg_finite_simple_alg",
  "level": "2",
  "url": "s_algebraic.html#eg_finite_simple_alg",
  "type": "Example",
  "number": "1.5.4",
  "title": "Simple extension with algebraic generator.",
  "body": " Simple extension with algebraic generator   Let , where is algebraic. Prove that is algebraic over .    According to , we have for some finite . It follows that given any , the set is linearly dependent, since it has more than elements ( , street smarts ). Thus there is a nontrivial linear combination . In other words, we have , where . This proves is algebraic, as desired.   "
},
{
  "id": "th_degree_towers",
  "level": "2",
  "url": "s_algebraic.html#th_degree_towers",
  "type": "Theorem",
  "number": "1.5.5",
  "title": "Tower law.",
  "body": " Tower law   Let be a tower of (possibly infinite) field extensions.   If is a basis of and is a basis of as a -vector space, then the set is a basis of as an -vector space.    We have .       "
},
{
  "id": "s_algebraic-8",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-8",
  "type": "Remark",
  "number": "1.5.6",
  "title": "Tower law.",
  "body": " Tower law  Statement (1) of is just as important as (2), as it gives us a procedure for building a basis for from bases of and of : namely, we simply take the set of all products of elements in and .  "
},
{
  "id": "s_algebraic-9",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-9",
  "type": "Remark",
  "number": "1.5.7",
  "title": "Tower law: infinite extensions.",
  "body": " Tower law: infinite extensions  The formula is true even when one or more of the field extensions involved is infinite, using the following rules from extended arithmetic : . Equivalently, we can interpret as stating that the extension is infinite if and only if is infinite or is infinite.  "
},
{
  "id": "cor_degree_towers",
  "level": "2",
  "url": "s_algebraic.html#cor_degree_towers",
  "type": "Corollary",
  "number": "1.5.8",
  "title": "Tower law.",
  "body": " Tower law   Let be a field extension.   If is a subextension of , then and .    Given a tower of extensions , we have .      "
},
{
  "id": "eg_degree_towers",
  "level": "2",
  "url": "s_algebraic.html#eg_degree_towers",
  "type": "Example",
  "number": "1.5.9",
  "title": "Tower law.",
  "body": " Tower law  Use the tower law to prove that the field extension has no nontrivial subextension : , if , then or .  "
},
{
  "id": "th_finite_ext",
  "level": "2",
  "url": "s_algebraic.html#th_finite_ext",
  "type": "Theorem",
  "number": "1.5.10",
  "title": "Finite extension theorem.",
  "body": " Finite extension theorem   Let be a field extension. The following statements are equivalent.    is finite.     is finitely generated and algebraic.     , where is algebraic over . In other words, is generated over by finitely many algebraic elements.       We prove the cycle of implications (1) (2) (3)\\implies (1)   Implication: (1) (2)  Assume is finite, of dimension .   We claim is finitely generated. Let be a basis of as an -vector space. Since , we have . It follows that , and hence is finitely generated (by the elements ). Indeed, since is a subfield of containing and for all , it must contain all -linear combinations of the . But then we have , and conclude that .    We claim that is algebraic. Take any . Since , the set , consisting of elements, is linearly independent. (Street smarts!) Thus there is a nontrivial linear combination , where for all . It follows that the -polynomial is nonzero and satisfies . Thus is algebraic over , as desired.       Implication: (2) (3)  Assume is finitely generated and algebraic. Since is finitely generated, there are elements such that . Since is algebraic, each element is algebraic over . Thus , and each is algebraic over , as desired.    Implication: (3) (1)  We will show that any field extension generated by finitely many algebraic elements is finite. The proof will proceed by induction on the number of generators of the field.  Base step: . Assume , where is algebraic over . By , we have . Thus is finite.  Induction step: assume any field extension generated over the base field by algebraic elements is a finite extension. Now suppose we have , where each is algebraic over . If for all , then , in which case is finite over . Otherwise, we may assume without loss of generality that . Since is algebraic over , the extension is finite by the base step. Let . We have a tower of fields , and thus by the tower law , the extension is finite if and only if is finite and is finite. We know already that is finite over . As for the extension it is easy to see that . Furthermore, since each is satisfies a nonzero polynomial , we see that each is algebraic over . Thus the extension is generated over by the algebraic elements . By induction is finite. The tower law now implies that is finite.    "
},
{
  "id": "s_algebraic-13",
  "level": "2",
  "url": "s_algebraic.html#s_algebraic-13",
  "type": "Remark",
  "number": "1.5.11",
  "title": "Finite extension theorem.",
  "body": " Finite extension theorem  As we saw in the proof of , given a field extension the following implications hold: . On the other hand, neither of these implications goes the other way. That is, we have . In other words, taken singly, neither of these two properties (finitely generated, algebraic) is strong enough to imply the property of being finite. tells us that the two properties taken together are in fact equivalent to being finite: , .  "
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
