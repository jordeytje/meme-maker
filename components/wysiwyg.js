Vue.component('wysiwyg', {
    template: `
        <div class="wysiwyg">
            <div class="tools">
                <div class="tool-row">
                    <div class="option option-font">
                        <i class="fas fa-font"></i>
                        
                        <select id="">
                            <option value="">Arial</option>
                            <option value="">Calibre</option>
                            <option value="">Impact</option>
                        </select>
                    </div>  
                    
                   <div class="option option-font">
                        <i class="fas fa-text-height"></i>
                        <input type="number" min="0" placeholder="24">
                        <span>px</span>
                    </div>  
                    
                   <div class="option option-font">
                        <i class="fas fa-tint"></i>
                        <input type="color">
                    </div>  
                </div>
                <div class="tool-row">
                    <div class="option option-style">
                        <i class="fas fa-bold"></i>
                        <i class="fas fa-italic"></i>
                        <i class="fas fa-underline"></i>
                        <i class="fas fa-strikethrough"></i>
                    </div>    
                    
                    <div class="option option-style">
                        <i class="fas fa-align-left"></i>
                        <i class="fas fa-align-center"></i>
                        <i class="fas fa-align-right"></i>
                    </div>
                    
                    <div class="option option-font">
                        <span>Remove</span>
                        <i class="fas fa-trash-alt"></i>
                    </div>  
                </div>
            </div>
            
            <div class="text">
                <input type="text" class="form-control">
            </div>
            
            <div class="controls">
                <span>Position:</span>
                
                <div class="option option-font">
                    <i class="fas fa-arrows-alt-v"></i>
                    <input type="number" min="0" placeholder="100">
                    <span>px</span>
                </div>    
                
                <div class="option option-font">
                    <i class="fas fa-arrows-alt-h"></i>    
                    <input type="number" min="0" placeholder="100"> 
                    <span>px</span>
                </div>   
            </div>
        </div>`,

    data() {
        return {
            value: '',
            style: '',
            align: '',
            size: '',
            font: '',
        }
    }
});