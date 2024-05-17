import { useState } from "react";

const Folder = (props) => {
    const { propData,   handleInsertNode = () => {} } = props;
    const [expand, setExpand] = useState(true);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });
    const handleNewFolder = (e, checkIsFolder) => {
        e.stopPropagation();

        setShowInput({
            visible: true,
            isFolder: checkIsFolder
        });

    }
    //
    const onAddFolder = (e) => {
        if ( e.keyCode === 13 && e.target.value) {
            handleInsertNode(propData.id, e.target.value,showInput.isFolder);
            setShowInput({ ...showInput, visible: false });
        }
    }

    if (propData?.isFolder) {
        return (
            <>
                <div className="folders">
                    <div className="folderName" onClick={() => setExpand(!expand)}>
                        <div>
                            📁 {propData?.name}
                        </div>
                        <div className="addFolder">
                            <button onClick={(e) => handleNewFolder(e, true)}> 📁 + </button>
                            <button onClick={(e) => handleNewFolder(e, false)}> 📄 + </button>
                        </div>
                    </div>
                    <div className="folderFiles" style={{ display: expand ? "block" : "none" }}>
                        {
                            showInput.visible && <div className="inputContainer">
                                <span> {showInput.isFolder ? "📁" : "📄"} </span>
                                <input type="text" name="newFolder" id="newFolder"
                                    onKeyDown={onAddFolder}
                                    autoComplete="off"
                                    onBlur={() => setShowInput({ ...showInput, visible: false })}
                                    autoFocus
                                />
                            </div>
                        }
                        {
                            propData.items.map((item) => {
                                return (
                                    <>
                                        <Folder propData={item} handleInsertNode={handleInsertNode}> </Folder>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    } else {
        return (<div id="files"> 📄{propData?.name}</div>)
    }
}

export default Folder;