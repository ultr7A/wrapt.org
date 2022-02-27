import { Node }         from "wrapt.co_re/src/Domain [╍🌐╍🧭╍]/syntax/0_1_0_structure-concept";
import { UnParser }     from "wrapt.co_re/src/Domain [╍🌐╍🧭╍]/system/un-parser";
import { Environment } from "wrapt.co_re/src/Model [╍⬡╍ꙮ╍▦╍]/object/1_4_0_environment";
import { forceSingleLine } from "wrapt.co_re/src/Model [╍⬡╍ꙮ╍▦╍]/util/1_ubiquitous-util";
import { getSourceFile, readWholeFile } from "../../../3_Operation_☀/3_util_(🔥)/4_0_io-util";
import { nodeObjects } from "../../../4_Frame_⚡/4_io/1_file-system/2_compatibility";

import { TokenizerOne } from "../../0_tokenizer/1_2_tokenizer.implementation/2_1_1_tokenizer.one";
import { Parser } from "../../1_parser/1_1_parser/3_1_1_parser";
import { localEvaluate } from "../../4_shell/3_2-nodejs/0_1_0_nodejs";
import { Analyzer } from "../0_3_analyzer/1_3_expression-analyzer";
import { RuntimeOptimizer } from "../1_3_jit/3_1_runtime-optimizer";
import { ModuleLinker } from "../4_2_1_native-module-linker/1_1_0_module-linker";
import { AbstractAOTCompiler } from "./0_0_aot-compiler-structure/0_2_1_abstract-aot-compiler";

/* ******************************************************* *
 * 
 * /T\__________[=]
 * ----------------- 
 *              [Ahead-of-time compiler]
 * 
 * for          
 * creating     : :
 *              /T\         [JS bundles]
 *              
 *              and         [Web-Components]
 *              ---------------
 * from         [[Expression or Statement] Node]
 * ----------------
 * ****************************************************** */
export class AOTCompiler extends AbstractAOTCompiler<Node, string> {
    

    public parser: Parser;
    public tokenizer: TokenizerOne;
    public optimizer: RuntimeOptimizer;
    public analyzer:  Analyzer;
    public transpiler: UnParser;

    public linker: ModuleLinker
    

    
    constructor() {
        super();     
    }


    public compileFromAST(program: Node): string {
        return "TODO: implement";
    }

    
    public compile(targetLanguage: string, entryPointFile: string, replPlugins: Record<string, any> = {}): Promise<void> {
        const env = new Environment();
            
        return getSourceFile(entryPointFile, readWholeFile, nodeObjects.fs).then(function (data) {
            localEvaluate(forceSingleLine(data), targetLanguage, this.tokenizer, 
            this.parser, 
            env, 
            replPlugins, 
            this.evaluator);
        }).catch(function (err) { console.log(err); });
    }

    public compileAndRun(entryPointFile: string, replPlugins: Record<string, any> = {}): Promise<void> {
        
        return getSourceFile(entryPointFile, readWholeFile, nodeObjects.fs).then(function (data) {
            const env = new Environment();

            localEvaluate(forceSingleLine(data), "js", this.tokenizer, 
            this.parser, 
            env, 
            replPlugins, 
            this.evaluator);
        }).catch(function (err) { console.log(err); });
    }



}
