
import { ConceptExpression } from "wrapt.co_re/dist/Domain [โ๐โ๐งญโ]/syntax/0_1_0_structure-concept.js"
import { Evaluator }         from "wrapt.co_re/dist/Domain [โ๐โ๐งญโ]/system/evaluator";

import { ConceptObject }     from "wrapt.co_re/dist/Model [โโฌกโ๊ฎโโฆโ]/object/1_0_1_object.js"

/**
 * 
 */
export class ConceptEvaluator implements Evaluator<ConceptExpression, ConceptObject> {
    public Eval(exp: ConceptExpression): ConceptObject {
        return null; //TODO: !
    }
}