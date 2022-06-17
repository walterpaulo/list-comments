import React from 'react';

function Textarea({ children }: { children?: React.FC }) {
    return (
        <Textarea>
            {children}
        </Textarea>
    );
}

export default Textarea;