import { useState } from "react";
import explorer from "../../../data/folderData";
import useTraverseTree from "../../../hook/use-traverse-tree";
import Folder from "../Folder/Folder";
const FolderTree = () =>{
const [explorerData, setExplorerData]=useState(explorer);
const {insertNode} = useTraverseTree();
const handleInsertNode = (folderId,Item,isFolder) => {
 const finalTree = insertNode(explorerData,folderId,Item,isFolder);
 setExplorerData(finalTree);
}
return ( <>   
<div className="folderWork">
    <p style={{color:"lime",fontSize:"25px", margin:"25px 32px",textShadow:"2px 3px darkblue",textAlign:"center"}}>
     Use enter to save file or folder and click on plus folder or <br />
     file icon to add new  file or folder. <br /> 
    Click on folder name to show items and add some new document.
      </p>
  <div className="foldersPresent">
  <Folder propData={explorerData} handleInsertNode={handleInsertNode}></Folder>
  </div>
</div>
</>)

}

export default FolderTree;