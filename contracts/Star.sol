// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Star is ERC1155, Ownable {
    constructor() ERC1155('') {}

    uint256 private starCount = 0;

    string public baseURI = '';
    string public baseExtension = '';

    // if ads.length > quantity.length, transaction will fail and no mints will go through
    // if ads.length < quantity.length, the extra values in quantity will be ignored
    function ownerMint(
        address[] calldata ads,
        uint256[] calldata quantity,
        uint256 typeId
    ) external onlyOwner {
        for (uint256 i = 0; i < ads.length; i++) {
            _mint(ads[i], typeId, quantity[i], '');
            starCount += quantity[i];
        }
    }

    function ownerMint1(address[] calldata ads, uint256 typeId)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < ads.length; i++) {
            _mint(ads[i], typeId, 1, '');
        }
        starCount += ads.length;
    }

    function burnStarForAddress(
        uint256 typeId,
        address burnTokenAddress,
        uint256 quantity
    ) external {
        _burn(burnTokenAddress, typeId, quantity);
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function uri(uint256 typeId) public view override returns (string memory) {
        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(baseURI, typeId.toString(), baseExtension)
                )
                : '';
    }
}
